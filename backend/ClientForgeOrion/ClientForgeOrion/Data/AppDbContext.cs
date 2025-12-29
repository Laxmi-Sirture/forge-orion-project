using Microsoft.EntityFrameworkCore; // required for DbContext and DbSet
using ClientForgeOrion.Models;       // required for your Client model

namespace ClientForgeOrion.Data
{
    public class AppDbContext : DbContext
    {
        // Constructor must pass options to base
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        // DbSet for Clients table
        public DbSet<Client> Clients { get; set; } = null!;
    }
}
