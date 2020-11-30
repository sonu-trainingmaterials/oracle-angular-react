using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models
{
    public class LoanAccount:Account
    {

        [Required(ErrorMessage ="Interest rate is required")]
        public double InterestRate { get; set; }

        [Required(ErrorMessage ="Loan duration is required")]
        public int DurationInMonths { get; set; }

        [Required(ErrorMessage ="EMI amount is required")]
        [DataType(DataType.Currency)]
        public double EMI { get; set; }

        [DataType(DataType.Currency)]        
        public double OutstandingBalance { get; set; }
        
        public bool SIEnabled { get; set; }

        [DataType(DataType.Date)]
        public DateTime? SIDate { get; set; }

        public string SavingAccountNo { get; set; }
    }
}
