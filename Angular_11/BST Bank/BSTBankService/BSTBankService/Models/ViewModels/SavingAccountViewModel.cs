using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.ViewModels
{
    public class SavingAccountViewModel
    {
        [Required(ErrorMessage = "Account number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [Required(ErrorMessage = "Amount is required")]
        [DataType(DataType.Currency)]
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage ="Identity Id is required")]
        public string IdentityId { get; set; }

               
    }
}
