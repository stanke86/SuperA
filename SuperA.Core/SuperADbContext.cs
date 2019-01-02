using Microsoft.EntityFrameworkCore;

namespace SuperA.Core
{
    public class SuperADbContext : DbContext
    {
        public SuperADbContext(DbContextOptions<SuperADbContext> options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Bid> Bids { get; set; }

        public DbSet<Case> Cases { get; set; }

        public DbSet<Tag> Tags { get; set; }

    }
}
