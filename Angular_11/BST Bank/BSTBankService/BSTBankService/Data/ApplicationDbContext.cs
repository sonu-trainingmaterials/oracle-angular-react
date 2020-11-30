using BSTBankService.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Data
{
    public class ApplicationDbContext:IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Customer> Customers { get; set; }
        public DbSet<Beneficiary> Beneficiaries { get; set; }
        public DbSet<AccountTransaction> AccountTransactions { get; set; }
        public DbSet<SavingAccount> SavingAccounts { get; set; }
        public DbSet<FixedAccount> FixedAccounts { get; set; }
        public DbSet<LoanAccount> LoanAccounts { get; set; }


        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //    builder.Entity<SavingAccount>().ToTable("SavingAccounts");
        //    builder.Entity<FixedAccount>().ToTable("FixedAccounts");
        //    builder.Entity<LoanAccount>().ToTable("LoanAccounts");
        //}
    }
}
