import React from "react";
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
  return (
    <div className="dashboard-container">
      {/* Top bar */}
      <div className="top-bar">
        <button className="bg-[#b1a1fa] text-white px-2 py-1 rounded">☰</button>
        <div className="btn-group">
           <Link to="/login">
          <button className="bg-[#FEA500]">
            <FiLogOut size={20} />
          </button></Link>
          <button className="bg-red-600">
            <FaUser size={20} />
          </button>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
  <div className="banner-video-container">
    <video autoPlay loop muted playsInline  className="gf" >
      <source src={c} type="video/mp4"/>
     
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
      </div></div>

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
            Copy your referral link and share with your friends to get more
            income.
          </p>
          <p className="gfd-link">
            https://ch4.mlmwebsite.tech/Home/SignUp?REG
          </p>
          <button className="gfd-copy-button">Copy Invitation Link 📋</button>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div className="mt-5 px-4">
          <div className="flex items-center w-full h-12 px-5 text-xs rounded-full bg-[#ffb800] text-black shadow-md shadow-gray-400/40 overflow-hidden">
            {/* Speaker Icon */}
            <div className="mr-2 flex-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#0e7fee"
              >
                <g clip-path="url(#clip0_2627_26828)">
                  <path
                    d="M15.9993 4V28C11.3327 28 7.86502 21.8927 7.86502 21.8927H3.99935C3.26297 21.8927 2.66602 21.2958 2.66602 20.5594V11.3405C2.66602 10.6041 3.26297 10.0072 3.99935 10.0072H7.86502C7.86502 10.0072 11.3327 4 15.9993 4Z"
                    fill="url(#paint0_linear_2627_26828)"
                  ></path>
                  <path
                    d="M21.334 10C21.7495 10.371 22.1261 10.7865 22.4567 11.2392C23.4265 12.5669 24.0007 14.2149 24.0007 16C24.0007 17.7697 23.4363 19.4045 22.4819 20.7262C22.1452 21.1923 21.7601 21.6195 21.334 22"
                    stroke="url(#paint1_linear_2627_26828)"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M22.8242 27.4573C26.7227 25.1303 29.3336 20.8701 29.3336 16.0001C29.3336 11.2058 26.8031 7.00246 23.005 4.65283"
                    stroke="url(#paint2_linear_2627_26828)"
                    stroke-width="1.8"
                    stroke-linecap="round"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2627_26828"
                    x1="9.33268"
                    y1="4"
                    x2="9.33268"
                    y2="28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF7C7C"></stop>
                    <stop offset="0.74876" stop-color="#F54545"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2627_26828"
                    x1="22.6673"
                    y1="10"
                    x2="22.6673"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF7C7C"></stop>
                    <stop offset="0.74876" stop-color="#F54545"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_2627_26828"
                    x1="26.0789"
                    y1="4.65283"
                    x2="26.0789"
                    y2="27.4573"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF7C7C"></stop>
                    <stop offset="0.74876" stop-color="#F54545"></stop>
                  </linearGradient>
                  <clipPath id="clip0_2627_26828">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Marquee Text */}
            <div className="relative w-full overflow-hidden h-[1.8rem]">
              <div className="relative w-full overflow-hidden h-[1.8rem]">
                <div className="marquee-test text-blue-700 text-[13px] leading-[14px]">
                  M4C Exchange, M4C SWAP, Crypto Gaming, Aviator &
                  Colourprediction Coming Soon
                  ..2025..0x931903e2e47f7293ff7b2657c93e7cae371c07540x931903e2e47f7293ff7b2657c93e7cae371c0754
                </div>
              </div>
            </div>

            {/* Detail Button */}
            <button className="ml-auto flex items-center justify-center gap-1 w-16 h-7 text-black font-bold border border-blue-900 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full px-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#0162c2"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* your SVG */}
              </svg>
              Detail
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <div className="rew-container">
          <select className="rew-select">
            <option>Select Language</option>
          </select>
          <div className="rew-box">
            <div className="rew-item">
              <span className="rew-icon">📄</span>
              <span className="rew-text">Notification</span>
              <span className="rew-arrow">→</span>
            </div>
            <div className="rew-divider" />
            <div className="rew-item">
              <span className="rew-icon">🔍</span>
              <span className="rew-text">24/7 Customer service</span>
              <span className="rew-arrow">→</span>
            </div>
            <div className="rew-divider" />
            <div className="rew-item">
              <span className="rew-icon">💎</span>
              <span className="rew-text">Beginner’s Guide (PDF)</span>
              <span className="rew-arrow">→</span>
            </div>
            <div className="rew-divider" />
            <div className="rew-item">
              <span className="rew-icon">📘</span>
              <span className="rew-text">About us</span>
              <span className="rew-arrow">→</span>
            </div>
            <div className="rew-divider" />
            <div className="rew-item">
              <span className="rew-icon">⬇️</span>
              <span className="rew-text">Download APP</span>
              <span className="rew-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}

      <div style={{ marginTop: "100px" }}></div>
      {/* <div className="bottom-nav">
        <div className="nav-item">
          <AiOutlineHome size={20} />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <BsBarChart size={20} />
          <span>Result</span>
        </div>
        <div className="nav-item deposit">
          <span style={{ backgroundColor: '#facc15', padding: '6px', borderRadius: '50%' }}>💎</span>
          <span>Deposit</span>
        </div>
        <div className="nav-item">
          <BsWallet2 size={20} />
          <span>Wallet</span>
        </div>
        <div className="nav-item">
          <BsChatDots size={20} />
          <span>Chat</span>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
