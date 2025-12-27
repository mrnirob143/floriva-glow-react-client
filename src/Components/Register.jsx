import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Register
        </legend>

        {/* Circular Image Upload with Camera Icon */}
        <div className="mt-2 text-center">
          <label className="cursor-pointer inline-block">
            <input type="file" accept="image/*" className="hidden" />
            <div className="w-12 h-12 mx-auto rounded-full border-2 border-red-700 flex items-center justify-center overflow-hidden bg-gray-100">
              {/* Camera Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                />
                <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth={2} />
              </svg>
            </div>
          </label>
        </div>

        <form className="flex flex-col gap-2 mt-2">
          <label className="label">Name</label>
          <input type="text" className="input input-bordered w-full" placeholder="Full Name" />

          <label className="label">Email</label>
          <input type="email" className="input input-bordered w-full" placeholder="Email" />

          <label className="label">Phone</label>
          <input type="tel" className="input input-bordered w-full" placeholder="Phone Number" />

          <label className="label">Password</label>
          <input type="password" className="input input-bordered w-full" placeholder="Password" />

          <label className="label">Confirm Password</label>
          <input type="password" className="input input-bordered w-full" placeholder="Confirm Password" />

          <button className="btn bg-red-700 text-white mt-4 w-full">
            Register
          </button>
        </form>

        {/* Login link */}
        <div className="mt-3 text-center text-sm">
          Already have an Account?{' '}
          <Link to="/login" className="text-red-700 font-semibold hover:underline">
            Login
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Register
