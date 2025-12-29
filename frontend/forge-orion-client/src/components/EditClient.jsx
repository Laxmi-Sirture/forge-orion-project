import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "./clientForm/Card";
import Input from "./clientForm/Input";
import Modal from "./Modal"; // ✅ Modal import

const EditClient = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientData =
    location.state && location.state.client ? location.state.client : null;

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (clientData) setFormData(clientData);
  }, [clientData]);

  const validate = () => {
    const newErrors = {};
    if (!formData.clientName) newErrors.clientName = "Client Name required";
    if (!formData.businessName)
      newErrors.businessName = "Business Name required";
    if (!formData.phone) newErrors.phone = "Phone required";
    if (!formData.email) newErrors.email = "Email required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const openModal = e => {
    e.preventDefault();
    if (!validate()) return;
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    try {
      setIsSubmitting(true);

      const response = await fetch(
        `https://localhost:7019/api/clients/${clientData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) throw new Error("Failed to update");

      navigate("/clients");
    } catch (err) {
      console.error(err);
      alert("Error updating client");
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (!clientData) return <p>Loading client data...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow rounded-2xl border border-gray-200 p-6 mb-6">
        <button
          className="text-indigo-600 hover:underline"
          onClick={() => navigate("/clients")}
        >
          ← Back to Clients
        </button>
        <h1 className="text-3xl font-bold mb-4">Edit Client</h1>

        <Card>
          <form onSubmit={openModal} className="space-y-4">
            <Input
              label="Client Name"
              value={formData.clientName || ""}
              onChange={e =>
                setFormData({ ...formData, clientName: e.target.value })
              }
              error={errors.clientName}
            />

            <Input
              label="Business Name"
              value={formData.businessName || ""}
              onChange={e =>
                setFormData({ ...formData, businessName: e.target.value })
              }
              error={errors.businessName}
            />

            <Input
              label="PAN"
              value={formData.pan || ""}
              onChange={e => setFormData({ ...formData, pan: e.target.value })}
            />

            <Input
              label="GSTIN"
              value={formData.gstin || ""}
              onChange={e =>
                setFormData({ ...formData, gstin: e.target.value })
              }
            />

            <Input
              label="Phone"
              value={formData.phone || ""}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
              error={errors.phone}
            />

            <Input
              label="Email"
              value={formData.email || ""}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              error={errors.email}
            />

            <Input
              label="Alternate Contact"
              value={formData.alternateContact || ""}
              onChange={e =>
                setFormData({
                  ...formData,
                  alternateContact: e.target.value
                })
              }
            />

            <Input
              label="Website"
              value={formData.website || ""}
              onChange={e =>
                setFormData({ ...formData, website: e.target.value })
              }
            />

            <Input
              label="Address Line 1"
              value={formData.addressLine1 || ""}
              onChange={e =>
                setFormData({ ...formData, addressLine1: e.target.value })
              }
            />

            <Input
              label="Address Line 2"
              value={formData.addressLine2 || ""}
              onChange={e =>
                setFormData({ ...formData, addressLine2: e.target.value })
              }
            />

            <Input
              label="City"
              value={formData.city || ""}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
            />

            <Input
              label="State"
              value={formData.state || ""}
              onChange={e =>
                setFormData({ ...formData, state: e.target.value })
              }
            />

            <Input
              label="Pincode"
              value={formData.pincode || ""}
              onChange={e =>
                setFormData({ ...formData, pincode: e.target.value })
              }
            />

            <Input
              label="Filing Frequency"
              value={formData.filingFrequency || ""}
              onChange={e =>
                setFormData({
                  ...formData,
                  filingFrequency: e.target.value
                })
              }
            />

            <Input
              label="Preferred Filing Date"
              type="date"
              value={formData.preferredFilingDate || ""}
              onChange={e =>
                setFormData({
                  ...formData,
                  preferredFilingDate: e.target.value
                })
              }
            />

            <Input
              label="Assigned To"
              value={formData.assignedTo || ""}
              onChange={e =>
                setFormData({ ...formData, assignedTo: e.target.value })
              }
            />

            <Input
              label="Status"
              value={formData.status || "Active"}
              onChange={e =>
                setFormData({ ...formData, status: e.target.value })
              }
            />

            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 rounded-lg"
                onClick={() => navigate("/clients")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Update Client
              </button>
            </div>
          </form>
        </Card>
      </div>

      {/* CONFIRMATION MODAL */}
      <Modal
        isOpen={isModalOpen}
        title="Confirm Update"
        message={`Are you sure you want to update "${formData.clientName}"?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        loading={isSubmitting}
      />
    </div>
  );
};

export default EditClient;
