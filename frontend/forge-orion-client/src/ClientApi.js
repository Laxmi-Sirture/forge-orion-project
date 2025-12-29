import axios from "axios";

const API_BASE = "https://localhost:7019/api/clients";

export const getClients = () => axios.get(API_BASE);
export const getClientById = id => axios.get(`${API_BASE}/${id}`);
export const createClient = clientData => axios.post(API_BASE, clientData);
export const updateClient = (id, clientData) =>
  axios.put(`${API_BASE}/${id}`, clientData);
export const deleteClient = id => axios.delete(`${API_BASE}/${id}`);
