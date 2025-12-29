import React from "react";
import Card from "../Card";

const ComplianceTracker = ({ formData, setFormData }) => (
  <Card title="Compliance Tracker" subtitle="Set up GST filing types">
    <div className="flex gap-4">
      {Object.keys(formData.complianceSetup).map(key => (
        <label key={key} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.complianceSetup[key]}
            onChange={e =>
              setFormData({
                ...formData,
                complianceSetup: {
                  ...formData.complianceSetup,
                  [key]: e.target.checked
                }
              })
            }
          />
          {key.toUpperCase()}
        </label>
      ))}
    </div>
  </Card>
);

export default ComplianceTracker;
