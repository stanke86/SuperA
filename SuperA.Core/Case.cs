using System;
using System.Collections.Generic;
using System.Text;

namespace SuperA.Core
{
    public class Case
    {
        public long Id { get; set; }

        public long CreatedByUserId { get; set; }

        public User CreatedByUser { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public virtual ICollection<Tag> Tags { get; set; }

        public virtual ICollection<Bid> Bids { get; set; }
    }
}
