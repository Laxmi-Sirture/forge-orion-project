import React from "react";
import Card from "../Card";
import Input from "../Input";

const AdditionalSettings = ({ formData = {}, setFormData, errors = {} }) => (
  <Card title="Additional Settings" subtitle="Other business-related info">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Input
          label="Industry"
          placeholder="Enter industry"
          value={formData.industry || ""}
          onChange={e => setFormData({ ...formData, industry: e.target.value })}
        />
        {errors.industry && (
          <p className="text-red-500 text-sm mt-1">{errors.industry}</p>
        )}
      </div>
      <div>
        <Input
          label="Business Type"
          placeholder="Enter business type"
          value={formData.businessType || ""}
          onChange={e =>
            setFormData({ ...formData, businessType: e.target.value })
          }
        />
        {errors.businessType && (
          <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>
        )}
      </div>
      <Input
        label="Annual Turnover"
        placeholder="Enter turnover"
        value={formData.annualTurnover || ""}
        onChange={e =>
          setFormData({ ...formData, annualTurnover: e.target.value })
        }
      />
      <Input
        label="Service Plan"
        placeholder="Enter service plan"
        value={formData.servicePlan || ""}
        onChange={e =>
          setFormData({ ...formData, servicePlan: e.target.value })
        }
      />
      <div className="col-span-1 md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          placeholder="Any notes..."
          value={formData.additionalNotes || ""}
          onChange={e =>
            setFormData({ ...formData, additionalNotes: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  </Card>
);

export default AdditionalSettings;
