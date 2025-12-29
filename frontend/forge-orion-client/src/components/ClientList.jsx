import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const ClientList = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // For Delete Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const navigate = useNavigate();

  // Fetch clients
  const fetchClients = async () => {
    try {
      const res = await axios.get("https://localhost:7019/api/clients");
      setClients(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch clients");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Open Delete Modal
  const openDeleteModal = client => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  // Confirm Delete
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(
        `https://localhost:7019/api/clients/${selectedClient.id}`
      );
      setIsModalOpen(false);
      fetchClients();
    } catch (err) {
      console.error(err);
      alert("Failed to delete client");
    }
  };

  // Cancel Delete
  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  // Search filter
  const filtered = clients.filter(
    c =>
      c.clientName && c.clientName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 w-full bg-[#f4f6f9] min-h-screen">
      {/* HEADER */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-gray-500 mt-1">
            Manage all your GST clients in one intelligent platform.
          </p>
        </div>

        <button
          onClick={() => navigate("/clients/add")}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl"
        >
          + Add New Client
        </button>
      </div>
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search clients..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full p-3 border rounded-xl mb-4"
      />

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow p-4 overflow-auto">
        <table className="w-full text-left min-w-[900px]">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Client Name</th>
              <th className="p-3">GSTIN</th>
              <th className="p-3">Phone</th>
              <th className="p-3">State</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="p-4 text-center">
                  Loading...
                </td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-4 text-center">
                  No clients found
                </td>
              </tr>
            ) : (
              filtered.map(client => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-semibold">{client.clientName}</td>
                  <td className="p-3">{client.gstin}</td>
                  <td className="p-3">{client.phone}</td>
                  <td className="p-3">{client.state}</td>
                  <td className="p-3">
                    <span
                      className={
                        "px-3 py-1 rounded-full text-sm " +
                        (client.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : client.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700")
                      }
                    >
                      {client.status}
                    </span>
                  </td>
                  <td className="p-3 flex gap-4 text-lg">
                    {/* View */}
                    <button
                      className="text-indigo-600"
                      onClick={async () => {
                        const res = await axios.get(
                          `https://localhost:7019/api/clients/${client.id}`
                        );
                        navigate("/clients/view", {
                          state: { client: res.data }
                        });
                      }}
                    >
                      👁️
                    </button>

                    {/* Edit */}
                    <button
                      className="text-blue-600"
                      onClick={async () => {
                        const res = await axios.get(
                          `https://localhost:7019/api/clients/${client.id}`
                        );
                        navigate("/clients/edit", {
                          state: { client: res.data }
                        });
                      }}
                    >
                      ✏️
                    </button>

                    {/* Delete */}
                    <button
                      className="text-red-600"
                      onClick={() => openDeleteModal(client)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      <Modal
        isOpen={isModalOpen}
        title="Confirm Delete"
        message={
          selectedClient
            ? `Are you sure you want to delete ${selectedClient.clientName}?`
            : "Are you sure you want to delete this client?"
        }
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default ClientList;
