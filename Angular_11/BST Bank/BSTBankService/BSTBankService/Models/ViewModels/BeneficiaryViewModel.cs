using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.ViewModels
{
    public class BeneficiaryViewModel
    {
        [Required(ErrorMessage = "Beneficiary accout number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [Required(ErrorMessage = "Beneficiary bank name is required")]
        public string BankName { get; set; }

        [Display(Name = "Beneficiary name")]
        [Required(ErrorMessage = "Beneficiary name is required")]
        public string Name { get; set; }

        [Required(ErrorMessage = "IFSC code is required")]
        public string IFSC { get; set; }

        [DataType(DataType.Currency)]
        [Required(ErrorMessage = "Transfer limit is required")]
        public double TransferLimit { get; set; }
        
        [Required(ErrorMessage = "Identity id is required")]
        public string IdentityId { get; set; }
    }
}
