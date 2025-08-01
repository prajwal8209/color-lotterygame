import React, { useState } from 'react';
import "../App.css";
import { Link } from "react-router-dom";

const LotteryCard = () => {
  const totalRows = 7;
  const totalCols = 10;

  const [selectedNumbers, setSelectedNumbers] = useState(Array(totalRows).fill(null));

  const handleSelect = (rowIndex, number) => {
    const updated = [...selectedNumbers];
    updated[rowIndex] = number;
    setSelectedNumbers(updated);
  };

  return (
    <div className="dashboard-container">
      <div className='bhh'>
      {/* Top Bar */}
   <div class="top-bar">
        <button class="bg-[#b1a1fa] text-white px-2 py-1 rounded">☰</button>
        <div class="btn-group">
            <Link to="/choose">
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

      {/* Number Grid */}
      <div style={{ marginTop: '20px' }}></div>
      <div className="ued-grid">
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="ued-grid-row">
            {[...Array(totalCols)].map((_, colIndex) => {
              const number = (rowIndex + colIndex) % 10;
              const isSelected = selectedNumbers[rowIndex] === number;

              return (
                <button
                  key={colIndex}
                  className={`ued-grid-btn ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelect(rowIndex, number)}
                >
                  {number}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Selected Numbers */}
      <div style={{ marginTop: '20px' }}></div>
      <div className="ued-selected">
        {selectedNumbers.map((num, idx) => (
          <button key={idx} className="ued-selected-number">
            {num !== null ? num : '-'}
          </button>
        ))}
      </div>

      {/* Details Section */}
      <div className="ued-details">
        <div className="ued-info">
          <div className="ued-info-row">
            <span>Lottery Id</span><br />
            <span className="ued-id">M4C07231</span>
          </div>
          <div className="ued-info-row">
            <span>Timer</span>
            <span>[::]</span>
          </div>
        </div>

        {/* Stats */}
        <div className="ued-stats">
          <span>Timer<br /><strong>30 min</strong></span>
          <span>Bet Amount<br /><strong>6$</strong></span>
          <span>Available Balance<br /><strong>8720.713</strong></span>
        </div>

        {/* Disclaimer */}
        <div className="ued-warning">
          <input type="checkbox" checked readOnly className="ued-checkbox" />
          Lottery Do not invest unless you are prepared to lose all the money invested.
          This is a high-risk investment and you should not expect protection if something goes wrong.
          Take 2 minutes to learn more.
        </div>

        {/* Bet Button */}
        <button className="ued-bet-btn">Bet</button>
      </div>

      <div style={{ marginBottom: '100px' }}></div>
    </div></div>
  );
};

export default LotteryCard;
