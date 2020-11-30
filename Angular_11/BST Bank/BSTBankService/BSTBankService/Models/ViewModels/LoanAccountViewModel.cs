using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.ViewModels
{
    public class LoanAccountViewModel
    {
        [Required(ErrorMessage = "Account number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [Required(ErrorMessage = "Amount is required")]
        [DataType(DataType.Currency)]
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage = "Interest rate is required")]
        public double InterestRate { get; set; }

        [Required(ErrorMessage = "Loan duration is required")]
        public int DurationInMonths { get; set; }

        [Required(ErrorMessage = "EMI amount is required")]
        [DataType(DataType.Currency)]
        public double EMI { get; set; }

        [DataType(DataType.Currency)]
        public double OutstandingBalance { get; set; }

        public bool SIEnabled { get; set; }

        [DataType(DataType.Date)]
        public DateTime? SIDate { get; set; }

        [Required(ErrorMessage = "Identity Id is required")]
        public string IdentityId { get; set; }


    }
}
