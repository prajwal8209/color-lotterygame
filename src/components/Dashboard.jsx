import React, { useState, useRef } from "react";

import "../App.css";
import { Link } from "react-router-dom";
import c from "../assets/t.mp4";
import wImage from "../assets/img/k.png";
import wwImage from "../assets/img/fr.png";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdVolumeUp } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChart, BsWallet2, BsChatDots } from "react-icons/bs";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <div className="dashboard-container">
  

      {/* Banner */}
      <div className="banner">
        <div className="banner-video-container">
          <video autoPlay loop muted playsInline className="gf">
            <source src={c} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-media">
        <p className="font-bold">Social Media</p>
        <div className="social-icons">
          <FaTelegramPlane />
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      {/* Game Buttons */}
      <div className="gfd-card">
        <div className="game-buttons">
          <Link to="/game">
            <div className="game-image">
              <img src={wImage} alt="Color Game" className="gt" />
            </div>
          </Link>
          <Link to="/choose">
            <div className="game-image">
              <img src={wwImage} alt="Lottery Game" className="gt" />
            </div>
          </Link>
        </div>
      </div>

      {/* Referral Box */}
      <div style={{ marginTop: "20px" }}>
        <div className="gfd-card">
          <div className="gfd-icon-wrapper">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5978/5978385.png"
              alt="megaphone"
              className="gfd-icon"
            />
          </div>
          <h3 className="gfd-title">Your Referral Link</h3>
          <p className="gfd-description">
            Copy your referral link and share with your friends to get more income.
          </p>
          <p className="gfd-link">
            https://ch4.mlmwebsite.tech/Home/SignUp?REG
          </p>
          <button className="gfd-copy-button">Copy Invitation Link 📋</button>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ margin: "20px auto", width: "340px" }}>
        <div className="mt-5 px-4">
          <div className="flex items-center w-full h-12 px-5 text-xs rounded-full bg-[#ffb800] text-black shadow-md shadow-gray-400/40 overflow-hidden">
            <div className="mr-2 flex-none">
              <MdVolumeUp size={20} color="#0e7fee" />
            </div>
            <div className="relative w-full overflow-hidden h-[1.8rem]">
              <div className="marquee-test text-blue-700 text-[13px] leading-[14px]">
                M4C Exchange, M4C SWAP, Crypto Gaming, Aviator & Colourprediction Coming Soon ..2025..
              </div>
            </div>
            <button className="ml-auto flex items-center justify-center gap-1 w-16 h-7 text-black font-bold border border-blue-900 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full px-2">
              Detail
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div style={{ marginTop: "20px" }}>
        <div className="rew-container">
          <select className="rew-select">
            <option>Select Language</option>
          </select>
          <div className="rew-box">
            {[
              ["📄", "Notification"],
              ["🔍", "24/7 Customer service"],
              ["💎", "Beginner’s Guide (PDF)"],
              ["📘", "About us"],
              ["⬇️", "Download APP"]
            ].map(([icon, text], i) => (
              <React.Fragment key={i}>
                <div className="rew-item">
                  <span className="rew-icon">{icon}</span>
                  <span className="rew-text">{text}</span>
                  <span className="rew-arrow">→</span>
                </div>
                {i !== 4 && <div className="rew-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Extra space for bottom nav */}
      <div style={{ marginTop: "100px" }}></div>

      {/* Bottom Nav (commented out)
      <div className="bottom-nav">
        <div className="nav-item"><AiOutlineHome size={20} /><span>Home</span></div>
        <div className="nav-item"><BsBarChart size={20} /><span>Result</span></div>
        <div className="nav-item deposit">
          <span style={{ backgroundColor: '#facc15', padding: '6px', borderRadius: '50%' }}>💎</span>
          <span>Deposit</span>
        </div>
        <div className="nav-item"><BsWallet2 size={20} /><span>Wallet</span></div>
        <div className="nav-item"><BsChatDots size={20} /><span>Chat</span></div>
      </div>
      */}
    </div>
  );
};

export default Dashboard;
