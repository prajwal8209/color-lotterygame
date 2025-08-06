import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/xxv.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper  flex items-center justify-center"> {/* ✅ Center using Tailwind */}
      <div className="card-container text-center p-4">
        <div className="image-wrapper relative">
          <img src={logo} alt="Color Prediction" className="logo-img" />
        </div>

        <div className="absolute bottom-0 left-0 w-full px-5 translate-y-1/2 flex flex-col mt-5">
          <button
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-base font-bold py-3 rounded-full mb-3"
            onClick={() => navigate('/login')}
          >
            Sign in
          </button>
        <button
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white text-base font-bold py-3 rounded-full mb-3"
            onClick={() => navigate('/sign')}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
