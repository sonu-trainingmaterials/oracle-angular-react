using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using BSTBankService.Data;
using BSTBankService.Models;
using BSTBankService.Models.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BSTBankService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class CustomerController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public CustomerController(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet("{identityId}")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomer(string identityId)
        {
            if(HttpContext.Items["IdentityId"].ToString()!=identityId)
            {
                return BadRequest("Invalid identity information, Identity mismatch");
            }
            var customer = await _dbContext.Customers
                .Include("Identity")
                .Include("Accounts")
                .Include("Beneficiaries")
                .SingleOrDefaultAsync(a => a.IdentityId == identityId);
            if (customer == null)
                return NotFound("Customer not exits with given id");            
            return Ok(customer);
        }

        [HttpPost("beneficiaries")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Customer>> AddBeneficiary(BeneficiaryViewModel model)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Beneficiary beneficiary = _mapper.Map(model, typeof(BeneficiaryViewModel), typeof(Beneficiary)) as Beneficiary;
            var customer = await _dbContext.Customers.SingleOrDefaultAsync(c => c.IdentityId == beneficiary.IdentityId);
            beneficiary.Customer = customer;
            await _dbContext.Beneficiaries.AddAsync(beneficiary);
            await _dbContext.SaveChangesAsync();
            return Created("", customer);
        }


    }
}
