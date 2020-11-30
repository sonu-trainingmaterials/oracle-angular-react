using AutoMapper;
using BSTBankService.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BSTBankService.Models.Mappings
{
    public class ViewModelToEntityMappingProfile:Profile
    {
        public ViewModelToEntityMappingProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

            CreateMap<SavingAccountViewModel, SavingAccount>();
            CreateMap<LoanAccountViewModel, LoanAccount>();
            CreateMap<FixedAccountViewModel, FixedAccount>();
            CreateMap<BeneficiaryViewModel, Beneficiary>();
        }
    }
}
