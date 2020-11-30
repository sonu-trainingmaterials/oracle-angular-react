using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using BSTBankService.Data;
using BSTBankService.Models;
using BSTBankService.Models.AppModels;
using BSTBankService.Models.ViewModels;
using BSTBankService.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace BSTBankService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly ApplicationDbContext _appDbContext;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;

        public AuthController(UserManager<AppUser> userManager, IMapper mapper, 
            ApplicationDbContext appDbContext,
            IJwtFactory jwtFactory, 
            IOptions<JwtIssuerOptions> jwtOptions)
        {
            _userManager = userManager;
            _mapper = mapper;
            _appDbContext = appDbContext;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;
        }

        [HttpPost("register")]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        public async Task<IActionResult> Register(RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = _mapper.Map(model, typeof(RegistrationViewModel),typeof(AppUser)) as AppUser;

            var result = await _userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded)
            {
                ModelState.AddModelError("", "Failed to register the user");
                return new BadRequestObjectResult(ModelState);
            }

            Customer customer = new Customer { 
                IdentityId = userIdentity.Id,                
            };

            await _appDbContext.Customers.AddAsync(customer);
            await _appDbContext.SaveChangesAsync();

            return new OkObjectResult("Account created");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Post([FromBody] LoginViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var identity = await GetClaimsIdentity(credentials.UserName, credentials.Password);
            if (identity == null)
            {
                ModelState.AddModelError("login_failure", "Invalid username or password.");
                return BadRequest(ModelState);
            }            

            var jwt = await GenerateJwt(identity, credentials.UserName);
            return new OkObjectResult(jwt);
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
        {
            if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
                return await Task.FromResult<ClaimsIdentity>(null);

            // get the user to verifty
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null) 
                return await Task.FromResult<ClaimsIdentity>(null);

            // check the credentials
            if (await _userManager.CheckPasswordAsync(user, password))
            {
                return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, user.Id));
            }

            // Credentials are invalid, or account doesn't exist
            return await Task.FromResult<ClaimsIdentity>(null);
        }

        private async Task<string> GenerateJwt(ClaimsIdentity identity, string userName)
        {
            var user= _appDbContext.Users.SingleOrDefault(u => u.UserName == userName);
            var response = new
            {
                id = identity.Claims.Single(c => c.Type == "id").Value,
                auth_token = await _jwtFactory.GenerateEncodedToken(userName, identity),
                expires_in = (int)_jwtOptions.ValidFor.TotalSeconds,
                userName = userName,
                firstName = user.FirstName,
                lastName = user.LastName
            };
            var serializerSettings = new JsonSerializerSettings { Formatting = Formatting.Indented };
            return JsonConvert.SerializeObject(response, serializerSettings);
        }
    }
}
