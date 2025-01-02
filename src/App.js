import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcome_page";
import MainPage from "./components/main_page";
import LoginPage from "./components/LoginPage";
import SachLogin from "./components/sachlogin";
import GovLogin from "./components/govlogin";
import UserLogin from "./components/userlogin";
import AddComplaint from "./components/add_comp";
import RoadDash from "./components/road_dash";
import Complaint from "./components/complaints";
import GovDash from "./components/gov_dash";
import About from "./components/Aboutpage";
import SachDash from "./components/sach_dash";
import Feedback from "./components/feedback";
import FeedbackComments from "./components/feedbackcomment";
import Work from "./components/WorkInProgress";
import Done from "./components/done";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sachlogin" element={<SachLogin />} />
        <Route path="/govlogin" element={<GovLogin />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/addcomp" element={<AddComplaint />} />
        <Route path="/roaddash" element={<RoadDash />} />
        <Route path="/complaints" element={<Complaint />} />
        <Route path="/govdash" element={<GovDash/>} /> 
        <Route path="/sachdash" element={<SachDash/>}/>
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/feedbackcomments" element={<FeedbackComments/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/done" element={<Done/>} />
      </Routes>
    </Router>
  );
}

export default App;
