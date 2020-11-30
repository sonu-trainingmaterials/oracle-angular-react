using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.ViewModels
{
    public class RegistrationViewModel
    {
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "First name is required")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required")]
        public string LastName { get; set; }

        public string PictureUrl { get; set; }

        public string SignImageUrl { get; set; }

        [Required(ErrorMessage = "Address is required")]
        [MaxLength(1000, ErrorMessage = "Maximum 1000 characters allowed")]
        public string Address { get; set; }

        [Required(ErrorMessage = "City is required")]
        public string City { get; set; }

        [Required(ErrorMessage = "State is required")]
        public string State { get; set; }

        [Required(ErrorMessage = "Country is required")]
        public string Country { get; set; }

        [Required(ErrorMessage = "Pincode is required")]
        public string Pincode { get; set; }

        [Required(ErrorMessage = "Aadhar number is required")]
        public string AadharNo { get; set; }

        public string PanNo { get; set; }
    }
}
