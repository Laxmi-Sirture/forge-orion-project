import React from "react";

const Modal = ({
  isOpen,
  title,
  message,
  modalErrors = [],
  onCancel,
  onConfirm
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96 max-w-full">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {modalErrors.length > 0 ? (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg space-y-1 mb-4">
            {modalErrors.map((err, idx) => (
              <div key={idx}>{err}</div>
            ))}
          </div>
        ) : (
          <p className="mb-6">{message}</p>
        )}

        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              modalErrors.length
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 text-white"
            }`}
            onClick={onConfirm}
            disabled={modalErrors.length > 0}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
