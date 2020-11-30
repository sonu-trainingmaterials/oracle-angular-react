using BSTBankService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models
{
    public class Customer
    {
        public int Id { get; set; }

        public string IdentityId { get; set; }

        public virtual AppUser Identity { get; set; } 

        public virtual ICollection<Account> Accounts { get; set; }

        public virtual ICollection<Beneficiary> Beneficiaries { get; set; }
    }
}
