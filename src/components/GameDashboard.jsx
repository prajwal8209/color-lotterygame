import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const GameDashboard = () => {
  const [activeTab, setActiveTab] = useState("record");

  return (
    <div className="game-wrapper">
      {/* Game panel */}
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
              <span className="pra-ball pra-ball-0">2</span>
              <span className="pra-ball1 pra-ball-0">2</span>
              <span className="pra-ball pra-ball-0">2</span>
              <span className="pra-ball1 pra-ball-0">2</span>
              <span className="pra-ball pra-ball-0">2</span>
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
          <span className="pra-ball">1</span>
          <span className="pra-ball1">1</span>
          <span className="pra-ball">1</span>
          <span className="pra-ball1">1</span>
          <span className="pra-ball">1</span>
          <span className="pra-ball1">1</span>
          <span className="pra-ball">1</span>
          <span className="pra-ball1">1</span>
          <span className="pra-ball">1</span>
          <span className="pra-ball1">1</span>
        </div>

        <div className="pra-size-btns">
          <button className="pra-big">Big</button>
          <button className="pra-small">Small</button>
        </div>
        <div className="ye-container">
          {/* Tabs */}
          <div className="ye-tabs">
            <button
              className={`ye-tab ${activeTab === "record" ? "active" : ""}`}
              onClick={() => setActiveTab("record")}
            >
              Record
            </button>
            <button
              className={`ye-tab ${activeTab === "chart" ? "active" : ""}`}
              onClick={() => setActiveTab("chart")}
            >
              Chart
            </button>
            <button
              className={`ye-tab ${activeTab === "history" ? "active" : ""}`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "record" && (
            <>
              <h2 className="ye-heading">Game Record</h2>
              <div>
                <select className="ye-select">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="ye-entries-label">entries per page</span>
              </div>
              <div className="ye-controls">
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
            </>
          )}

          {activeTab === "chart" && (
            <div className="ye-tab-content">
              <h2 className="ye-heading">Game Chart</h2>
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
          )}

          {activeTab === "history" && (
            <div className="ye-tab-content">
              <h2 className="ye-heading">Game History</h2>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
