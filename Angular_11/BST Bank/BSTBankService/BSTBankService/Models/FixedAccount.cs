using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models
{
    public class FixedAccount:Account
    {
        [DataType(DataType.Date)]
        public DateTime MaturityDate { get; set; }

        [Required(ErrorMessage ="Interest rate is required")]
        public double InterestRate { get; set; }

        [Required(ErrorMessage ="Nominee name is required")]
        public string NomineeName { get; set; }

        [Required(ErrorMessage ="Relation to nominee is required")]
        public string NomineeRelation { get; set; }

    }
}
