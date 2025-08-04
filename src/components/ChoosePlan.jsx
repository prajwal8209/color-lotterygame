import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../App.css";

const ChoosePlan = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <div className="dashboard-container">
     

      {/* Main Content */}
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
            <button className="uyt-scan-btn">Scan ticket</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;
