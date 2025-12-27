import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-svh">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Login
        </legend>

        <form>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn bg-red-700 text-white mt-4 w-full">
            Login
          </button>
        </form>

        {/* Forgot password link */}
        <div className="mt-3 text-right">
          <Link
            to="/ForgotPassword"
            className="text-sm text-red-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Register link */}
        <div className="mt-2 text-center text-sm">
          Don&apos;t have an Account?{' '}
          <Link to="/register" className="text-red-700 font-semibold hover:underline">
            Register
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login
