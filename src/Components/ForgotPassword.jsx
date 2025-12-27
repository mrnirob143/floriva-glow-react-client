import React from 'react';
import { Link } from 'react-router';

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6">
        
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Forgot Password
        </legend>

        <form className="flex flex-col gap-2 mt-2">
          <label className="label">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
           
          />

          <button
            type="submit"
            className="btn bg-red-700 text-white mt-4 w-full"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-3 text-center text-sm">
          Remembered your password?{' '}
          <Link to="/login" className="text-red-700 font-semibold hover:underline">
            Login
          </Link>
        </div>

      

      </div>
    </div>
  );
};

export default ForgotPassword;
