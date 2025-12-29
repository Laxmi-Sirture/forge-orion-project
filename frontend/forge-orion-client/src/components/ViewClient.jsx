import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ViewClient = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const client =
    location.state && location.state.client ? location.state.client : null;

  if (!client) {
    return (
      <div className="p-6">
        <p className="text-red-600 text-lg">Client data not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Client Details</h1>
        <button
          onClick={() => navigate("/clients")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ← Back to Clients
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-6">
        {/* Basic Info */}
        <Section title="Basic Information">
          <Info label="Client Name" value={client.clientName} />
          <Info label="Business Name" value={client.businessName} />
          <Info label="Phone" value={client.phone} />
          <Info label="Email" value={client.email} />
          <Info label="Alternate Contact" value={client.alternateContact} />
          <Info label="Website" value={client.website} />
        </Section>

        {/* GST Information */}
        <Section title="GST Information">
          <Info label="GSTIN" value={client.gstin} />
          <Info label="PAN" value={client.pan} />
          <Info label="Filing Frequency" value={client.filingFrequency} />
          <Info
            label="Preferred Filing Date"
            value={client.preferredFilingDate}
          />
        </Section>

        {/* Address */}
        <Section title="Address Details">
          <Info label="Address Line 1" value={client.addressLine1} />
          <Info label="Address Line 2" value={client.addressLine2} />
          <Info label="City" value={client.city} />
          <Info label="State" value={client.state} />
          <Info label="Pincode" value={client.pincode} />
        </Section>

        {/* Other Info */}
        <Section title="Other Details">
          <Info label="Business Type" value={client.businessType} />
          <Info label="Industry" value={client.industry} />
          <Info label="Assigned To" value={client.assignedTo} />
          <Info label="Status" value={client.status} />
        </Section>
      </div>
    </div>
  );
};

// Reusable Section Component
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-700 mb-3">{title}</h2>
    <div className="grid grid-cols-2 gap-4">{children}</div>
  </div>
);

// Reusable Info Component
const Info = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-gray-900 font-medium">{value || "-"}</span>
  </div>
);

export default ViewClient;
