using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.ViewModels
{
    public class FixedAccountViewModel
    {
        [Required(ErrorMessage = "Account number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [Required(ErrorMessage = "Amount is required")]
        [DataType(DataType.Currency)]
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime MaturityDate { get; set; }

        [Required(ErrorMessage = "Interest rate is required")]
        public double InterestRate { get; set; }

        [Required(ErrorMessage = "Nominee name is required")]
        public string NomineeName { get; set; }

        [Required(ErrorMessage = "Relation to nominee is required")]
        public string NomineeRelation { get; set; }

        [Required(ErrorMessage = "Identity Id is required")]
        public string IdentityId { get; set; }
    }
}
