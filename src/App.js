import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/main_page";
import LoginPage from "./components/LoginPage";
import SachLogin from "./components/sachlogin";
import GovLogin from "./components/govlogin";
import UserLogin from "./components/userlogin";
import AddComplaint from "./components/add_comp";
import RoadDash from "./components/road_dash";
import Complaint from "./components/complaints";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sachlogin" element={<SachLogin />} />
        <Route path="/govlogin" element={<GovLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/addcomp" element={<AddComplaint />} />
        <Route path="/roaddash" element={<RoadDash />} />
        <Route path="/complaints" element={<Complaint />} />
      </Routes>
    </Router>
  );
}

export default App;
