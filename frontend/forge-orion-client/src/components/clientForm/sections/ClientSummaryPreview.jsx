import React from "react";
import Card from "../Card";

const ClientSummaryPreview = ({ formData }) => {
  return (
    <Card
      title="Client Summary Preview"
      subtitle="Review all details before saving"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Business Info */}
        <div className="bg-blue-100 p-4 rounded-lg space-y-2">
          <h3 className="font-semibold text-blue-700">Business Info</h3>
          <div className="flex justify-between">
            <span>Business Name:</span>
            <span>{formData.businessName || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>Owner:</span>
            <span>{formData.owner || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>PAN:</span>
            <span>{formData.pan || "-"}</span>
          </div>
        </div>

        {/* GST Details */}
        <div className="bg-purple-100 p-4 rounded-lg space-y-2">
          <h3 className="font-semibold text-purple-700">GST Details</h3>
          <div className="flex justify-between">
            <span>GSTIN:</span>
            <span>{formData.gstin || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>Status:</span>
            <span>{formData.gstStatus || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span>Frequency:</span>
            <span>{formData.gstFrequency || "-"}</span>
          </div>
        </div>

        {/* Assigned Team */}
        <div className="bg-green-100 p-4 rounded-lg space-y-2">
          <h3 className="font-semibold text-green-700">Assigned Team</h3>
          <div className="flex justify-between">
            <span>CA/Staff:</span>
            <span>{formData.assignedStaff || "-"}</span>
          </div>

          <div className="flex flex-col">
            <span>Permissions:</span>
            <ul className="ml-4 list-disc">
              {formData.permissions
                ? Object.entries(formData.permissions).map(([key, value]) => (
                    <li key={key}>
                      {key}: {value ? "Yes" : "No"}
                    </li>
                  ))
                : "-"}
            </ul>
          </div>

          <div className="flex justify-between">
            <span>Access Level:</span>
            <span>{formData.accessLevel || "Full"}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ClientSummaryPreview;
