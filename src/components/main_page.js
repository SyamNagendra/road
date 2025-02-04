import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LoginScreen.css";
import { FaArrowLeft } from "react-icons/fa";

export default function LoginScreen() {
    const navigate  = useNavigate();

    return (
        <div className="container">
             {/* Back Button */}
             <button className="back-button" onClick={() => navigate("/")}><FaArrowLeft /></button>

            
            <h1 className="title">LOGINS</h1>

            <div className="button-container">
                <div className="login-box">
                    <img src={require('../assets/sach.jpg')} alt="Sachivalayam Icon" className="icon" />
                    <button className="button-text" onClick={() => navigate('/sachlogin')}>Sachivalayam</button>
                </div>

                <div className="login-box">
                    <img src={require('../assets/road.jpg')} alt="Road Ministry Icon" className="icon" />
                    <button className="button-text" onClick={() => navigate('/login')}>Road Ministry</button>
                </div>

                <div className="login-box">
                    <img src={require('../assets/user.jpg')} alt="User Icon" className="icon" />
                    <button className="button-text" onClick={() => navigate('/userlogin')}>User</button>
                </div>
            </div>
        </div>
    );
}
