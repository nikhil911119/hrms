import "./App.css";
import Register from "./pages/auth/Register/Register.jsx";
import ApplyLeave from "./pages/employee/ApplyLeave.jsx";

import Dashboard from "./pages/employee/Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeaveForm from "./pages/employee/LeaveForm.jsx";
// import Login from "./login/Login.jsx";

function App() {
  return (
    <>
      {/* Navbar can be shown globally, or conditionally by role */}

      <Routes>
        {/* Employee routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/apply-for-leave" element={<ApplyLeave />} />
        <Route path="/apply-for-leave/:leave-type" element={<LeaveForm />} />

        {/* Example: Auth routes */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
