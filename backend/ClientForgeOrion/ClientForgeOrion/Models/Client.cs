using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace ClientForgeOrion.Models
{
    [Index(nameof(Pan), IsUnique = true)]
    [Index(nameof(Gstin), IsUnique = true)]
    [Index(nameof(Phone), IsUnique = true)]
    public class Client
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Client name is required")]
        public string ClientName { get; set; } = null!;

        public string? BusinessName { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 10, ErrorMessage = "PAN must be 10 characters")]
        public string Pan { get; set; } = null!;

        [Required]
        [StringLength(15, MinimumLength = 15, ErrorMessage = "GSTIN must be 15 characters")]
        public string Gstin { get; set; } = null!;

        public string? BusinessType { get; set; }
        public string? Industry { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        public string Phone { get; set; } = null!;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; } = null!;

        public string? AlternateContact { get; set; }
        public string? Website { get; set; }

        public string? AddressLine1 { get; set; }
        public string? AddressLine2 { get; set; }
        public string? City { get; set; }
        public string? State { get; set; }
        public string? Pincode { get; set; }

        public string? FilingFrequency { get; set; }
        public string? PreferredFilingDate { get; set; }

        public string? AssignedTo { get; set; }

        [Required]
        public string Status { get; set; } = "Active";
    }
}
