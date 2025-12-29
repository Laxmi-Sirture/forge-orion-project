import React from "react";
import Card from "../Card";
import Input from "../Input";

const AddressDetails = ({ formData = {}, setFormData, errors = {} }) => {
  return (
    <Card title="Address Details">
      <div className="space-y-4">
        <div>
          <Input
            label="Address Line 1"
            placeholder="Enter address line 1"
            value={formData.addressLine1 || ""}
            onChange={e =>
              setFormData({ ...formData, addressLine1: e.target.value })
            }
          />
          {errors.addressLine1 && (
            <p className="text-red-500 text-sm mt-1">{errors.addressLine1}</p>
          )}
        </div>

        <div>
          <Input
            label="Address Line 2"
            placeholder="Enter address line 2"
            value={formData.addressLine2 || ""}
            onChange={e =>
              setFormData({ ...formData, addressLine2: e.target.value })
            }
          />
          {/* Address Line 2 optional, error not needed */}
        </div>

        <div>
          <Input
            label="City"
            placeholder="Enter city"
            value={formData.city || ""}
            onChange={e => setFormData({ ...formData, city: e.target.value })}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <Input
            label="State"
            placeholder="Enter state"
            value={formData.state || ""}
            onChange={e => setFormData({ ...formData, state: e.target.value })}
          />
          {errors.state && (
            <p className="text-red-500 text-sm mt-1">{errors.state}</p>
          )}
        </div>

        <div>
          <Input
            label="Pincode"
            placeholder="Enter pincode"
            value={formData.pincode || ""}
            onChange={e =>
              setFormData({ ...formData, pincode: e.target.value })
            }
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default AddressDetails;
