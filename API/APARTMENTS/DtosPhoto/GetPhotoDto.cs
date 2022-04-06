using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APARTMENTS.DtosPhoto
{
    public class GetPhotoDto
    {
        public int UserId { get; set; }
        public string Url { get; set; }
        public Boolean IsMain { get; set; }
    }
}
