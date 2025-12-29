import React from "react";
import Card from "../Card";
import Input from "../Input";

const BasicInformation = ({ formData = {}, setFormData, errors = {} }) => {
  return (
    <Card title="Basic Information">
      <div className="space-y-4">
        <div>
          <Input
            label="Client Name"
            placeholder="Enter client name"
            value={formData.clientName || ""}
            onChange={e =>
              setFormData({ ...formData, clientName: e.target.value })
            }
          />
          {errors.clientName && (
            <p className="text-red-500 text-sm mt-1">{errors.clientName}</p>
          )}
        </div>

        <div>
          <Input
            label="Business Name"
            placeholder="Enter business name"
            value={formData.businessName || ""}
            onChange={e =>
              setFormData({ ...formData, businessName: e.target.value })
            }
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>
          )}
        </div>

        <div>
          <Input
            label="PAN"
            placeholder="ABCDE1234F"
            value={formData.pan || ""}
            onChange={e => setFormData({ ...formData, pan: e.target.value })}
          />
          {errors.pan && (
            <p className="text-red-500 text-sm mt-1">{errors.pan}</p>
          )}
        </div>

        <div>
          <Input
            label="GSTIN"
            placeholder="22ABCDE1234F1Z5"
            value={formData.gstin || ""}
            onChange={e => setFormData({ ...formData, gstin: e.target.value })}
          />
          {errors.gstin && (
            <p className="text-red-500 text-sm mt-1">{errors.gstin}</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BasicInformation;
