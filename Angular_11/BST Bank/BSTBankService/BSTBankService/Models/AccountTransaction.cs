using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models
{
    [Table("AccountTransactions")]
    public class AccountTransaction
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        public string ReferenceId { get; set; }

        [Required(ErrorMessage ="Account number is required")]
        [RegularExpression("^[0-9]*$", ErrorMessage = "Account number can accept only numbers")]
        public string AccountNo { get; set; }

        [DataType(DataType.Date)]
        [Required(ErrorMessage ="Transaction date is required")]
        public DateTime TransactionDate { get; set; }

        [Required(ErrorMessage ="Transaction type is required")]
        public TransactionType Type { get; set; }

        [DataType(DataType.Currency)]
        [Required(ErrorMessage ="Amount is required")]
        public double Amount { get; set; }

        public TransactionStatus Status { get; set; }
    }

    public enum TransactionType
    {
        Credit,
        Debit
    }

    public enum TransactionStatus
    {
        Success, Failure, Pending
    }
}
