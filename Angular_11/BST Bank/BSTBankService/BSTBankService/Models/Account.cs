using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models
{
    public abstract class Account
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "Account number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [Required(ErrorMessage ="Amount is required")]
        [DataType(DataType.Currency)]
        public double Amount { get; set; }

        [DataType(DataType.Date)]
        public DateTime StartDate { get; set; }

        [Required(ErrorMessage ="Account type is required")]
        public AccountType AccountType { get; set; }

        [JsonIgnore]
        public virtual Customer Customer { get; set; }
    }

    public enum AccountType
    {
        Saving,
        Fixed,
        Loan
    }
}
