import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/main_page";
import LoginPage from "./components/LoginPage";
import SachLogin from "./components/sachlogin";
import GovLogin from "./components/govlogin";
import UserLogin from "./components/userlogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sachlogin" element={<SachLogin />} />
        <Route path="/govlogin" element={<GovLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
