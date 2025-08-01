import React from "react";
import "../App.css";
import hg from "../assets/usdt.png";
import hg1 from "../assets/c.png";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const USDTDeposit = () => {
  return (
    <div className="dashboard-container">
      {/* Top bar */}
      <div className="top-bar">
        <button className="bg-[#b1a1fa] text-white px-2 py-1 rounded">☰</button>
        <div className="btn-group">
           <Link to="/dashboard">
          <button className="bg-[#FEA500]">
            <FiLogOut size={20} />
          </button></Link>
          <button className="bg-red-600">
            <FaUser size={20} />
          </button>
        </div>
      </div>
      <div className="dwq-container">
        <div className="dwq-balance-box">
          <h5 className="dwq-balance-title">Available Balance</h5>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={hg1}
              alt="Color Prediction"
              style={{ width: "63px", height: "63px" }}
            />
          </div>

          <h3 className="dwq-balance-amount">$ 8720.713</h3>
        </div>

        <div className="dwq-usdt-box d-flex align-items-center gap-3">
          <img
            src={hg}
            alt="Color Prediction"
            style={{ width: "63px", height: "63px" }}
          />
          <div>
            <div className="dwq-usdt-type">USDT - BEP-20</div>
            <div className="dwq-usdt-limit">$10 To Unlimited</div>
          </div>
        </div>

        <div className="dwq-form-box">
          <label htmlFor="usdtAmount" className="dwq-form-label">
            Enter USDT
          </label>
          <input
            type="number"
            id="usdtAmount"
            className="dwq-input"
            placeholder="USDT ($)"
          />
          <button className="dwq-connect-btn">Connect Wallet</button>

          <p className="dwq-note">
            <strong>Note:</strong> Minimum Deposit $10 USDT to $10000 (BEP-20)
          </p>

          <p className="dwq-warning">
            <strong>Note:</strong> During the payment process, the page will
            auto refresh once the payment is completed to complete the payment.
            Don’t press back or any other event buttons once initiated during
            the transaction. Do not refresh the page, or click the back or close
            buttons.
          </p>

          <div className="dwq-instructions">
            <p>
              <strong>Deposit Instructions:</strong>
            </p>
            <ul>
              <li>
                Minimum deposit: 10 USDT, deposits less than 10 USDT will not be
                credited.
              </li>
              <li>
                Do not deposit any non-currency assets to the above address, or
                the assets will not be recovered.
              </li>
              <li>
                Please confirm that the operating environment is safe to avoid
                information being tampered with or leaked.
              </li>
              <li>
                The transfer amount must match the order you created, otherwise
                the money cannot be credited successfully.
              </li>
              <li>
                Note: do not send the deposit order after the money has been
                transferred.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default USDTDeposit;
