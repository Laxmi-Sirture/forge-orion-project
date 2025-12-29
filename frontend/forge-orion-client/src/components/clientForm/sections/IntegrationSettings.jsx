import React from "react";
import Card from "../Card";

const IntegrationSettings = ({ formData, setFormData }) => (
  <Card
    title="Integration Settings"
    subtitle="Select integration options for client"
  >
    <div className="flex gap-4 flex-wrap">
      {Object.keys(formData.integrationSettings).map(key => (
        <label key={key} className="flex items-center gap-2 capitalize">
          <input
            type="checkbox"
            checked={formData.integrationSettings[key]}
            onChange={e =>
              setFormData({
                ...formData,
                integrationSettings: {
                  ...formData.integrationSettings,
                  [key]: e.target.checked
                }
              })
            }
          />
          {key}
        </label>
      ))}
    </div>
  </Card>
);

export default IntegrationSettings;
