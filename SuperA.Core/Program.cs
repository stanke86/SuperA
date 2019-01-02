using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SuperA.Core
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Db();
        }

        private static void Db()
        {
            var optionsBuilder = new DbContextOptionsBuilder<SuperADbContext>();
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=SuperA;Trusted_Connection=True;");
            var context = new SuperADbContext(optionsBuilder.Options);
            context.Database.EnsureCreated();
            var cases = context.Cases.ToList();
        }
    }
}
