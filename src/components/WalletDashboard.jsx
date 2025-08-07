import React from "react";
import "../App.css"; // Ensure your styles are defined here
import { FaWallet } from "react-icons/fa";
import { MdOutlineHistory, MdGroups } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsCashStack } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaGift } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const WalletDashboard = () => {
  return (
     <div className="dashboard-container">
          {/* Top bar */}
      
    <div className="">
      <div className="oiu-wallet-box">
        <h2 className="oiu-wallet-title">Wallet</h2>
        <FaWallet  className="oiu-wallet-icon" />
        <div className="oiu-wallet-amount">$8720.713</div>
      </div>

      <div className="m-card-container">
      <div className="m-wallet-section">
        <div className="m-wallet-box">
          <div className="m-percentage-circle">0%</div>
          <div className="m-amount">₹0.00</div>
          <div className="m-wallet-label">Main wallet</div>
        </div>
        <div className="m-wallet-box">
          <div className="m-percentage-circle">0%</div>
          <div className="m-amount">₹0.00</div>
          <div className="m-wallet-label">3rd party wallet</div>
        </div>
      </div>
      <button className="m-transfer-button">Main wallet transfer</button>
    </div>

      <div className="oiu-action-row">
        <div className="oiu-action-card">
          <button className="oiu-btn"><BsCashStack size={26}  /> Deposit</button>
        </div>
        <div className="oiu-action-card">
          <button className="oiu-btn"><MdOutlineHistory size={26}  /> Dep History</button>
        </div>
        <div className="oiu-action-card">
          <button className="oiu-btn"><BiMoneyWithdraw size={26}  /> Withdraw</button>
        </div>
        <div className="oiu-action-card">
          <button className="oiu-btn"><GiReceiveMoney size={26}  /> With History</button>
        </div>
      </div>

    
    </div>
    </div>
  );
};

export default WalletDashboard;
