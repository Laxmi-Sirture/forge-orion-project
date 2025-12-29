using ClientForgeOrion.Data;
using ClientForgeOrion.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ClientForgeOrion.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientsController(AppDbContext context)
        {
            _context = context;
        }

        // CREATE
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] Client client)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var duplicate = await _context.Clients.FirstOrDefaultAsync(c =>
            c.Gstin == client.Gstin ||
            c.Pan == client.Pan ||
            c.Phone == client.Phone
            );

            if (duplicate != null)
            {
                Console.WriteLine("❌ DUPLICATE CLIENT ENTRY");

                if (duplicate.Gstin == client.Gstin)
                    Console.WriteLine(" DUPLICATE GSTIN");

                if (duplicate.Pan == client.Pan)
                    Console.WriteLine(" DUPLICATE PAN");

                if (duplicate.Phone == client.Phone)
                    Console.WriteLine(" DUPLICATE PHONE");

                return BadRequest("Duplicate client data");
            }


            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = client.Id }, client);
        }

        // READ ALL
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var clients = await _context.Clients.ToListAsync();
            return Ok(clients);
        }

        // READ BY ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
                return NotFound("Client not found");

            return Ok(client);
        }

        // UPDATE
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Client client)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var existing = await _context.Clients.FindAsync(id);
            if (existing == null)
                return NotFound("Client not found");

            var duplicate = await _context.Clients.FirstOrDefaultAsync(c =>
                c.Id != id &&
                (c.Gstin == client.Gstin ||
                 c.Pan == client.Pan ||
                 c.Phone == client.Phone)
            );

            if (duplicate != null)
            {
                if (duplicate.Gstin == client.Gstin)
                    return BadRequest("GSTIN already exists");

                if (duplicate.Pan == client.Pan)
                    return BadRequest("PAN already exists");

                if (duplicate.Phone == client.Phone)
                    return BadRequest("Phone number already exists");
            }

            existing.ClientName = client.ClientName;
            existing.BusinessName = client.BusinessName;
            existing.Email = client.Email;
            existing.Phone = client.Phone;
            existing.Pan = client.Pan;
            existing.Gstin = client.Gstin;
            existing.BusinessType = client.BusinessType;
            existing.Industry = client.Industry;
            existing.AlternateContact = client.AlternateContact;
            existing.Website = client.Website;
            existing.AddressLine1 = client.AddressLine1;
            existing.AddressLine2 = client.AddressLine2;
            existing.City = client.City;
            existing.State = client.State;
            existing.Pincode = client.Pincode;
            existing.FilingFrequency = client.FilingFrequency;
            existing.PreferredFilingDate = client.PreferredFilingDate;
            existing.AssignedTo = client.AssignedTo;
            existing.Status = client.Status;

            await _context.SaveChangesAsync();
            return Ok(existing);
        }

        // DELETE
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var client = await _context.Clients.FindAsync(id);
            if (client == null)
                return NotFound("Client not found");

            _context.Clients.Remove(client);
            await _context.SaveChangesAsync();

            return Ok("Client deleted successfully");
        }
    }
}
