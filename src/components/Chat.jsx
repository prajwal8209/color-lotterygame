import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { FaWallet, FaGift, FaUser } from "react-icons/fa";
import { MdOutlineHistory, MdGroups } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import b from "../assets/y.png";

const Chat = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div className="dashboard-container">
     

      {/* Main content */}
      <div className="oiu-container">
        <div className="oiu-wallet-box">
          <img src={b} alt="Color Prediction" style={{ width: "105px" }} />
          <h5 className="oiu-wallet-title1">Member</h5>
          <div className="oiu-wallet-amount1">ID:5454</div>
        </div>

        <div className="oiu-action-row">
          <div className="oiu-action-card">
            <button className="oiu-btn">
              <BsCashStack size={26} /> Deposit
            </button>
          </div>
          <div className="oiu-action-card">
            <button className="oiu-btn">
              <MdOutlineHistory size={26} /> Dep History
            </button>
          </div>
          <div className="oiu-action-card">
            <button className="oiu-btn">
              <BiMoneyWithdraw size={26} /> Withdraw
            </button>
          </div>
          <div className="oiu-action-card">
            <button className="oiu-btn">
              <GiReceiveMoney size={26} /> With History
            </button>
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
      </div>
    </div>
  );
};

export default Chat;
