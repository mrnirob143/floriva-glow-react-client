import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Register
        </legend>

        <form>
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Full Name" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <label className="label">Confirm Password</label>
          <input type="password" className="input" placeholder="Confirm Password" />

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
