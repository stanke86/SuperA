using AutoMapper;
using SuperA.Core;

namespace SuperA.Models.Maps
{
    public class LoginUserMap : Profile
    {
        public LoginUserMap()
        {
            CreateMap<User, LoginModel>();
        }
    }
}
