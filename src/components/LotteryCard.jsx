import React, { useState } from 'react';
import "../App.css";
import { FaUser } from "react-icons/fa";
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
