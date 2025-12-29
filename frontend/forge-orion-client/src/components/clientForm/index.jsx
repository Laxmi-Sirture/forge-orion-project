import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import BasicInformation from "./sections/BasicInformation";
import GSTInformation from "./sections/GSTInformation";
import AddressDetails from "./sections/AddressDetails";
import BillingSettings from "./sections/BillingSettings";
import AccessPermissions from "./sections/AccessPermissions";
import AdditionalSettings from "./sections/AdditionalSettings";
import DocumentUpload from "./sections/DocumentUpload";
import ComplianceTracker from "./sections/ComplianceTracker";
import IntegrationSettings from "./sections/IntegrationSettings";
import ClientSummaryPreview from "./sections/ClientSummaryPreview";
import Modal from "../Modal"; // <-- Modal import

const AddClientForm = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    businessName: "",
    pan: "",
    gstin: "",
    businessType: "",
    industry: "",
    phone: "",
    alternateContact: "",
    email: "",
    website: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
    filingFrequency: "Monthly",
    preferredFilingDate: "",
    assignedTo: "",
    ownerName: "",
    district: "",
    annualTurnover: "",
    servicePlan: "",
    additionalNotes: "",
    complianceAlerts: { email: true, sms: true, whatsapp: false },
    permissions: {
      fileReturns: true,
      viewReports: true,
      editClient: true,
      manageBillings: false,
      handleWaybills: true
    },
    documents: { gst: null, pan: null, addressProof: null, others: null },
    complianceSetup: { gstr1: true, gstr3b: true, gstrA: true },
    integrationSettings: {
      tally: false,
      excel: true,
      quickBooks: false,
      customAPI: false
    }
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.clientName) newErrors.clientName = "Client Name is required";
    if (!formData.businessName)
      newErrors.businessName = "Business Name is required";
    if (!formData.pan) newErrors.pan = "PAN is required";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan))
      newErrors.pan = "Invalid PAN";

    if (!formData.gstin) newErrors.gstin = "GSTIN is required";
    else if (
      !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/.test(formData.gstin)
    )
      newErrors.gstin = "Invalid GSTIN";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid Email";

    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.addressLine1)
      newErrors.addressLine1 = "Address Line 1 is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.pincode) newErrors.pincode = "Pincode is required";
    if (!formData.industry) newErrors.industry = "Industry required";
    if (!formData.businessType)
      newErrors.businessType = "Business Type required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setShowModal(true); // <-- Show modal instead of alert
  };

  const confirmSave = async () => {
    try {
      const res = await fetch("https://localhost:7019/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        alert("Error saving client");
        return;
      }

      setShowModal(false);
      navigate("/clients");
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-white shadow rounded-2xl border p-6 mb-6">
        <button
          onClick={() => navigate("/clients")}
          className="text-indigo-600 font-medium hover:underline"
        >
          ← Back to Clients
        </button>

        <h1 className="text-3xl font-bold mb-2">Add New Client</h1>
        <p>Enter GST and business details for filing.</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <BasicInformation
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <GSTInformation
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <AddressDetails
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <BillingSettings
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <AccessPermissions formData={formData} setFormData={setFormData} />
          <AdditionalSettings
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
          <DocumentUpload formData={formData} setFormData={setFormData} />
          <ComplianceTracker formData={formData} setFormData={setFormData} />
          <IntegrationSettings formData={formData} setFormData={setFormData} />
          <ClientSummaryPreview formData={formData} />

          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg"
              type="button"
              onClick={() => navigate("/clients")}
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              type="submit"
            >
              Save Client
            </button>
          </div>
        </form>
      </Card>

      {/* CONFIRM MODAL */}
      <Modal
        isOpen={showModal}
        title="Confirm Save"
        message="Are you sure you want to save this client?"
        onCancel={() => setShowModal(false)} // <-- change from onClose
        onConfirm={confirmSave}
      />
    </div>
  );
};

export default AddClientForm;
