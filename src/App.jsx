import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

  // Define paths where BottomNav should not be visible
  const hideBottomNavPaths = ['/', '/login'];

  const shouldShowBottomNav = !hideBottomNavPaths.includes(location.pathname);

  return (
    <div className="min-h-screen app-wrapper relative ">
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

      {shouldShowBottomNav && <BottomNav />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
