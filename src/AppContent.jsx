import React, { useState, useRef } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import BottomNav from './components/BottomNav';
import GameDashboard from './components/GameDashboard';
import ChoosePlan from './components/ChoosePlan';
import LotteryCard from './components/LotteryCard';
import LotteryHistory from './components/LotteryHistory';
import USDTDeposit from './components/USDTDeposit';
import WalletDashboard from './components/WalletDashboard';
import Chat from './components/Chat';

function AppContent() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const hideTopBottomNavPaths = ['/', '/login'];
  const shouldShowTopNav = !hideTopBottomNavPaths.includes(location.pathname);
  const shouldShowBottomNav = !hideTopBottomNavPaths.includes(location.pathname);

  return (
    <div className="min-h-screen app-wrapper relative">
      {/* Sidebar */}
      {sidebarOpen && (
        <div ref={sidebarRef} className="uytcc-sidebar">
          <button
            onClick={() => setSidebarOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "20px",
              cursor: "pointer"
            }}
          >
            ✖
          </button>
          <ul className="uytcc-menu">
            <li><Link to="/dashboard" className="uytcc-link">🏠 Home</Link></li>
            <li><Link to="/result" className="uytcc-link">📊 Result</Link></li>
            <li><Link to="/wallet" className="uytcc-link">💼 Wallet</Link></li>
            <li><Link to="/usdt" className="uytcc-link">💰 Deposit</Link></li>
            <li><Link to="/chat" className="uytcc-link">🙍‍♂️ Profile</Link></li>
            <li><Link to="/" className="uytcc-link">🚪 Logout</Link></li>
          </ul>
        </div>
      )}

      {/* Top bar */}
      {shouldShowTopNav && (
        <div className="top-bar flex justify-between items-center p-2 bg-gray-800 text-white">
          <button
            className="bg-[#b1a1fa] text-white px-2 py-1 rounded"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className="btn-group flex gap-2">
            <Link to="/dashboard">
              <button className="bg-[#FEA500] p-1 rounded">
                <FiLogOut size={20} />
              </button>
            </Link>
            <Link to="/chat">
              <button className="bg-red-600 p-1 rounded">
                <FaUser size={20} />
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<GameDashboard />} />
        <Route path="/choose" element={<ChoosePlan />} />
        <Route path="/lot" element={<LotteryCard />} />
        <Route path="/result" element={<LotteryHistory />} />
        <Route path="/usdt" element={<USDTDeposit />} />
        <Route path="/wallet" element={<WalletDashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>

      {/* Bottom Navigation */}
      {shouldShowBottomNav && <BottomNav />}
    </div>
  );
}

export default AppContent;
