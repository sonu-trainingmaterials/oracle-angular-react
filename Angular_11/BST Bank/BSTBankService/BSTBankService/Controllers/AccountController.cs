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
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;

        public AccountController(ApplicationDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet("types")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [AllowAnonymous]
        public ActionResult<IEnumerable<dynamic>> GetAccoutTypes()
        {
            dynamic acc_types = new List<dynamic>()
            {
                new { Code= (int)AccountType.Saving, Name=nameof(AccountType.Saving) },
                new { Code= (int)AccountType.Fixed, Name=nameof(AccountType.Fixed) },
                new { Code= (int)AccountType.Loan, Name=nameof(AccountType.Loan) }
            };
            return Ok(acc_types);
        }

        [HttpPost("savings/create")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Account>> CreateSaving(SavingAccountViewModel account)
        {
            TryValidateModel(account);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var savingAccount = _mapper.Map(account, typeof(SavingAccountViewModel), typeof(SavingAccount)) as SavingAccount;
                var customer = _dbContext.Customers.SingleOrDefault(s => s.IdentityId == account.IdentityId);
                savingAccount.Customer = customer;
                savingAccount.AccountType = AccountType.Saving;
                await _dbContext.SavingAccounts.AddAsync(savingAccount);
                await _dbContext.SaveChangesAsync();
                return Created("", account);
            } catch (Exception ex)
            {
                ModelState.AddModelError("creation_failed", "Failed to create the account");
                return BadRequest(ModelState);
            }
        }

        [HttpPost("loan/create")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Account>> CreateLoan(LoanAccountViewModel account)
        {
            TryValidateModel(account);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var loanAccount = _mapper.Map(account, typeof(LoanAccountViewModel), typeof(LoanAccount)) as LoanAccount;
                var customer = _dbContext.Customers.SingleOrDefault(s => s.IdentityId == account.IdentityId);
                loanAccount.Customer = customer;
                loanAccount.AccountType = AccountType.Loan;
                await _dbContext.LoanAccounts.AddAsync(loanAccount);
                await _dbContext.SaveChangesAsync();
                return Created("", account);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("creation_failed", "Failed to create the account");
                return BadRequest(ModelState);
            }
        }

        [HttpPost("fixed/create")]
        [ProducesResponseType((int)HttpStatusCode.Created)]
        [ProducesResponseType((int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Account>> CreateFixed(FixedAccountViewModel account)
        {
            TryValidateModel(account);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var fixedAccount = _mapper.Map(account, typeof(FixedAccountViewModel), typeof(FixedAccount)) as FixedAccount;
                var customer = _dbContext.Customers.SingleOrDefault(s => s.IdentityId == account.IdentityId);
                fixedAccount.Customer = customer;
                fixedAccount.AccountType = AccountType.Fixed;
                await _dbContext.FixedAccounts.AddAsync(fixedAccount);
                await _dbContext.SaveChangesAsync();
                return Created("", account);
            }
            catch (Exception ex)
            {
                ModelState.AddModelError("creation_failed", "Failed to create the account");
                return BadRequest(ModelState);
            }
        }

    }
}
