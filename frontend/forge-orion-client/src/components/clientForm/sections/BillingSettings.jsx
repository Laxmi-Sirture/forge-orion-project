import React from "react";
import Card from "../Card";
import Input from "../Input";

const BillingSettings = ({ formData = {}, setFormData, errors = {} }) => {
  return (
    <Card title="Billing Settings">
      <div className="space-y-4">
        <div>
          <Input
            label="Phone"
            placeholder="Enter phone number"
            value={formData.phone || ""}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <Input
            label="Alternate Contact"
            placeholder="Enter alternate contact"
            value={formData.alternateContact || ""}
            onChange={e =>
              setFormData({ ...formData, alternateContact: e.target.value })
            }
          />
        </div>

        <div>
          <Input
            label="Email"
            placeholder="Enter email"
            type="email"
            value={formData.email || ""}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <Input
            label="Website"
            placeholder="Enter website URL"
            value={formData.website || ""}
            onChange={e =>
              setFormData({ ...formData, website: e.target.value })
            }
          />
        </div>

        <div>
          <Input
            label="Assigned To"
            placeholder="Team member"
            value={formData.assignedTo || ""}
            onChange={e =>
              setFormData({ ...formData, assignedTo: e.target.value })
            }
          />
        </div>
      </div>
    </Card>
  );
};

export default BillingSettings;
