import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
} from "react-icons/fa";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050816] via-[#020617] to-black px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Sign Up
        </h2>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-slate-300 mb-2">Full Name</label>
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
            <FaUser className="text-slate-400 mr-3" />
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent w-full outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-slate-300 mb-2">Email</label>
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
            <FaEnvelope className="text-slate-400 mr-3" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full outline-none text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-slate-300 mb-2">Password</label>
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
            <FaLock className="text-slate-400 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              className="bg-transparent w-full outline-none text-white placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-slate-400 hover:text-white transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-slate-300 mb-2">
            Confirm Password
          </label>
          <div className="flex items-center bg-white/10 rounded-lg px-4 py-3">
            <FaLock className="text-slate-400 mr-3" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="bg-transparent w-full outline-none text-white placeholder-slate-400"
            />
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="text-slate-400 hover:text-white transition"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg">
          Create Account
        </button>

      </div>
    </div>
  );
}

export default SignUp;
