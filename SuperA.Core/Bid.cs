using System;

namespace SuperA.Core
{
    public class Bid
    {
        public long Id { get; set; }

        public long CreatedByUserId { get; set; }

        public string Description { get; set; }

        public bool IsAccepted { get; set; }

        public DateTime DateCreated { get; set; }
    }
}