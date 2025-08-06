import React from 'react';
import { useNavigate } from 'react-router-dom'; // ⬅️ Import this

const Signup = () => {
  const navigate = useNavigate(); // ⬅️ Hook for navigation

  const handleLogin = () => {
    // You can add validation here if needed
    navigate('/dashboard'); // ⬅️ Navigate to Dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1d0052] to-[#6c48ff] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#1e0054] text-white rounded-lg border border-yellow-400 p-6">
        <div className="flex justify-around mb-6 border-b border-yellow-400 pb-2">
          <div className="flex items-center gap-2 text-yellow-400 border-b-2 border-yellow-400 pb-1">
            <i className="ph ph-device-mobile"></i>
            <span>Signup with Phone</span>
          </div>
          
        </div>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-sm mb-1">📱 Phone No.</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-yellow-400 rounded-md text-black placeholder-gray-500"
          />
        </div>
         <div className="mb-4">
          <label className="block text-sm mb-1">📱 Phone No.</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-yellow-400 rounded-md text-black placeholder-gray-500"
          />
        </div>
        
         <div className="mb-4">
          <label className="block text-sm mb-1">📱 Phone No.</label>
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full px-4 py-2 border border-yellow-400 rounded-md text-black placeholder-gray-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm mb-1">🔒 Password</label>
          <input
            type="password"
            placeholder="Your Password"
            className="w-full px-4 py-2 border border-yellow-400 rounded-md text-black placeholder-gray-500"
          />
        </div>

        {/* Links */}
        <div className="flex justify-between text-xs text-gray-300 my-2">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2 mb-3 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Remember Me
              <br />
              <small className="text-[11px] text-gray-300 block">
                Do not invest unless you're prepared to lose all the money invested. This is a high-risk investment...
              </small>
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            I confirm I am 18+
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <span>
              Allow us to notify you of important winning information through this mobile number.
            </span>
          </label>
        </div>

        <div className="text-right text-sm text-yellow-300 mb-3">
          <a href="#">Forget Password?</a>
        </div>

        <button
          className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-yellow-500 to-yellow-400 mb-3"
          onClick={handleLogin} // ⬅️ Attach the function
        >
          Log In
        </button>
        <button className="w-full py-3 rounded-full font-bold bg-white text-[#1c0066]">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
