import { useState } from "react";
import "./App.css";
import { Dashboard } from "../src/Components/Dashboard";
import { Routes, Route } from "react-router-dom";
import UserTable from "./Components/screens/UserTable";
import Login from "../src/Components/Login";
import AdminLayout from "./Components/AdminLayout";
import AdminProfile from "./Components/screens/AdminProfile";
import ChangePassword from "./Components/screens/ChangePassword";
import CreateProduct from "./Components/screens/CreateProduct";
import NotFound from "./Components/screens/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Routes>
          <Route index element={<Login />} />

          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/usertable" element={<UserTable />} />
            <Route path="/adminProfile" element={<AdminProfile />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/createProduct" element={<CreateProduct />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
