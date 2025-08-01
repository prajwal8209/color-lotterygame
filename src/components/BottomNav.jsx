import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChart, BsWallet2, BsChatDots } from "react-icons/bs";
import { BsPerson } from "react-icons/bs"; 
const BottomNav = () => {
  return (
    <div
   style={{
    height: "12%",
    borderRadius: "25px 24px 0 0",
    width: "375px",
    margin: "0 auto"
  }}


      className="fixed bottom-0 left-0 right-0 bg-[#5735D2] text-white font-bold shadow-md flex justify-between items-center px-4 py-2 border-t"
    >
      <Link to="/dashboard">
        <div className="flex flex-col items-center text-sm">
          <AiOutlineHome size={35} />
          <span className="mt-1 text-xs">Home</span>
        </div>
      </Link>
      <Link to="/result">
        <div className="flex flex-col items-center text-sm">
          <BsBarChart size={35} />
          <span className="mt-1 text-xs">Result</span>
        </div>
      </Link>
        <Link to="/usdt">
      <div className="flex flex-col items-center text-sm relative -top-4">
        <div
          style={{ fontSize: "25px", marginTop: "-28px" }}
          className="cd bg-[#1a0f4c] p-3 rounded-full shadow-lg text-xl"
        >
          💎
        </div>

        <span className="mt-1 text-xs">Deposit</span>
      </div></Link>
      <Link to="/wallet">
      <div className="flex flex-col items-center text-sm">
        <BsWallet2 size={35} />
        <span className="mt-1 text-xs">Wallet</span>
      </div></Link>
      <Link to="/chat">
      <div className="flex flex-col items-center text-sm">
      <BsPerson size={35} />
        <span className="mt-1 text-xs">Profile</span>
      </div></Link>
    </div>
  );
};

export default BottomNav;
