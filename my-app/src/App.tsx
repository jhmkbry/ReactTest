import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/student/Dashboard";
import Activity from "./pages/student/Activity";
import Events from "./pages/student/Events";
import Profile from "./pages/student/Profile";
import QR from "./pages/student/QR";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/student/dashboard" element={<Dashboard />} />
        <Route path="/student/activity" element={<Activity />} />
        <Route path="/student/events" element={<Events />} />
        <Route path="/student/profile" element={<Profile />} />
        <Route path="/student/qr" element={<QR />} />
      </Routes>
    </>
  );
}

export default App;
