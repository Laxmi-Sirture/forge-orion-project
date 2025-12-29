import React from "react";
import Card from "../Card";

const AccessPermissions = ({ formData, setFormData }) => (
  <Card
    title="Access & Permissions"
    subtitle="Assign permissions to the client user"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {formData.permissions &&
        Object.keys(formData.permissions).map(perm => (
          <label key={perm} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.permissions[perm]}
              onChange={e =>
                setFormData({
                  ...formData,
                  permissions: {
                    ...formData.permissions,
                    [perm]: e.target.checked
                  }
                })
              }
            />
            {perm
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, str => str.toUpperCase())}
          </label>
        ))}
    </div>
  </Card>
);

export default AccessPermissions;
