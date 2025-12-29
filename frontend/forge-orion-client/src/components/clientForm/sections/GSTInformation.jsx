import React from "react";
import Card from "../Card";
import Input from "../Input";

const GSTInformation = ({ formData = {}, setFormData, errors = {} }) => {
  return (
    <Card title="GST Information">
      <Input
        label="GSTIN"
        placeholder="22ABCDE1234F1Z5"
        value={formData.gstin || ""}
        onChange={e => setFormData({ ...formData, gstin: e.target.value })}
        error={errors.gstin}
      />

      {/* Dropdown for Filing Frequency */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Filing Frequency
        </label>
        <select
          value={formData.filingFrequency || ""}
          onChange={e =>
            setFormData({ ...formData, filingFrequency: e.target.value })
          }
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
        >
          <option value="">Select frequency</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>
        {errors.filingFrequency && (
          <p className="text-red-600 text-sm mt-1">{errors.filingFrequency}</p>
        )}
      </div>

      <Input
        label="Preferred Filing Date"
        placeholder="YYYY-MM-DD"
        type="date"
        value={formData.preferredFilingDate || ""}
        onChange={e =>
          setFormData({ ...formData, preferredFilingDate: e.target.value })
        }
        error={errors.preferredFilingDate}
      />
    </Card>
  );
};

export default GSTInformation;
