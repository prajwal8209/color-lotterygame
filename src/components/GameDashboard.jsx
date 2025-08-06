import React, { useState, useRef } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const GameDashboard = () => {
  const [activeTab, setActiveTab] = useState("record");


  return (
    <div className="game-wrapper">
    
      {/* Game Section */}
      <div className="pra-container">
        <div className="pra-top-info">
          <div className="pra-balance">💳 8720.713</div>
          <br />
          <button className="pra-timer-btn">3 Min</button>
        </div>

        <div className="pra-panel-wrapper">
          <div className="pra-prediction-box">
            <p>Prediction 1 Min</p>
            <div className="pra-balls">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i % 2 === 0 ? "pra-ball pra-ball-0" : "pra-ball1 pra-ball-0"}>2</span>
              ))}
            </div>
          </div>

          <div className="pra-timer-box">
            <p>Time Remaining:</p>
            <strong>Time's up!</strong>
            <p>202507231</p>
          </div>
        </div>

        <div className="pra-join-btns">
          <button className="pra-green">Join Green</button>
          <button className="pra-violet">Join Violet</button>
          <button className="pra-red">Join Red</button>
        </div>

        <div className="pra-odds text-black">
          <span>1.95X</span>
          <span>4.5X</span>
          <span>1.95X</span>
        </div>

        <div className="pra-number-grid pra-prediction-box1">
          {[...Array(10)].map((_, i) => (
            <span key={i} className={i % 2 === 0 ? "pra-ball" : "pra-ball1"}>1</span>
          ))}
        </div>

        <div className="pra-size-btns">
          <button className="pra-big">Big</button>
          <button className="pra-small">Small</button>
        </div>

        {/* Tabs */}
        <div className="ye-container">
          <div className="ye-tabs">
            {["record", "chart", "history"].map((tab) => (
              <button
                key={tab}
                className={`ye-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="ye-tab-content">
            <h2 className="ye-heading">
              Game {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="ye-controls">
              <div>
                <select className="ye-select">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="ye-entries-label">entries per page</span>
              </div>
              <div>
                <label htmlFor="search" className="ye-search-label">
                  Search:
                </label>
                <input type="text" id="search" className="ye-search" />
              </div>
            </div>

            <table className="ye-table">
              <thead>
                <tr>
                  <th>Period Id</th>
                  <th>Number</th>
                  <th>Color</th>
                  <th>Big/Small</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="4" className="ye-no-data">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="ye-footer">
              <span>Showing 0 to 0 of 0 entries</span>
              <div className="ye-pagination">
                <button>&laquo;</button>
                <button className="ye-current-page">1</button>
                <button>&raquo;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
