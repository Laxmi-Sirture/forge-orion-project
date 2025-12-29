import React from "react";
import Card from "../Card";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline"; // Heroicons v2

const DocumentUpload = ({ formData = {}, setFormData, errors = {} }) => {
  // File change handler
  const handleFileChange = (e, key) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [key]: e.target.files[0]
      }
    });
  };

  // Documents list
  const documentsList = [
    { key: "gst", label: "GST Certificate" },
    { key: "pan", label: "PAN Card" },
    { key: "addressProof", label: "Address Proof" },
    { key: "others", label: "Other Documents" }
  ];

  return (
    <Card
      title="Document Upload"
      subtitle="Upload client documents and certificates"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {documentsList.map(doc => (
          <div
            key={doc.key}
            className="relative border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500"
          >
            {/* Icon */}
            <CloudArrowUpIcon className="w-10 h-10 text-gray-400 mb-2" />

            {/* Labels */}
            <label className="text-center text-gray-700 font-medium mb-1">
              {doc.label}
            </label>
            <span className="text-sm text-gray-400 mb-2">
              Click to upload or drag and drop
            </span>
            <span className="text-xs text-gray-400">
              PDF, JPG, PNG (Max 5MB)
            </span>

            {/* File Input */}
            <input
              type="file"
              onChange={e => handleFileChange(e, doc.key)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {/* Show uploaded file name */}
            {formData.documents && formData.documents[doc.key] && (
              <p className="text-sm mt-2 text-gray-600">
                {formData.documents[doc.key].name}
              </p>
            )}

            {/* Show errors */}
            {errors.documents && errors.documents[doc.key] && (
              <p className="text-red-500 text-sm mt-1">
                {errors.documents[doc.key]}
              </p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DocumentUpload;
