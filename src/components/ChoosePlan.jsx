
import React from "react";

import "../App.css";
import { Link } from 'react-router-dom';

const ChoosePlan = () => {
  return (
    <div className="dashboard-container">
        <div class="top-bar">
        <button class="bg-[#b1a1fa] text-white px-2 py-1 rounded">☰</button>
        <div class="btn-group">
            <Link to="/dashboard">
          <button class="bg-[#FEA500]">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button></Link>
          <button class="bg-red-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
          </button>
        </div>
      </div>
    <div className="uyt-container">
         <div className="ff">
      <h2 className="uyt-heading">Choose Plan</h2>
      <p className="uyt-subtext">
        Select a plan to unlock paid features of the application<br />
        Unlock all the features the Lottery app has to offer with our comprehensive<br />
        All-Access plans! Customize your experience by choosing plans that focus on specific
      </p>

      <div className="uyt-card">
        <div className="uyt-card-left">
          <h3 className="uyt-plan-title">Star 30 Min</h3>
          <ul className="uyt-features">
            <li>Lottery Package: 6$</li>
            <li>Lose Bet: 50% Back (3$)</li>
            <li>Unlimited Lottery Scan</li>
            <li>Cancel anytime (Non-Refundable)</li>
          </ul>
        </div>

        <div className="uyt-card-right">
          <p className="uyt-prize-text">1st Winning Lottery</p>
          <p className="uyt-prize-amount">27.63 $</p>
          <button className="uyt-bet-btn">Next Bet 2x</button>
        </div>
      </div>
 <Link to="/lot">
      <button className="uyt-scan-btn">Scan ticket</button></Link>
    </div></div>
    </div>
  );
};

export default ChoosePlan;
