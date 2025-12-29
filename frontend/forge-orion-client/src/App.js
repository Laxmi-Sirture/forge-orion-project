import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientList from "./components/ClientList";
import AddClientForm from "./components/clientForm"; // index.jsx auto-load
import EditClient from "./components/EditClient"; // Edit page
import ViewClient from "./components/ViewClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddClientForm />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/add" element={<AddClientForm />} />
        <Route path="/clients/edit" element={<EditClient />} />
        <Route path="/clients/view" element={<ViewClient />} />

        {/* Edit route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
