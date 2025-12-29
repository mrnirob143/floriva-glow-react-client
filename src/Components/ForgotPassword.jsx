import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // To show success message

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://your-backend.com/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true); // Shows the success state
        setErrors({});
      } else {
        setErrors({ general: data.message || 'Request failed' });
      }
    } catch (error) {
      setErrors({ general: 'Server error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-4 shadow-sm">
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Reset Password
        </legend>

        {errors.general && (
          <p className="text-red-700 text-sm text-center mb-2">{errors.general}</p>
        )}

        {submitted ? (
          <div className="text-center py-4">
            <div className="text-green-600 font-bold mb-2">Email Sent!</div>
            <p className="text-xs text-gray-600 mb-4">
              Please check your inbox for the reset link.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="text-red-700 text-xs font-semibold hover:underline"
            >
              Try another email
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-1 mt-2" onSubmit={handleSubmit} noValidate>
            <label className="label py-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({});
              }}
              placeholder="Enter your email"
              className={`input input-bordered w-full ${errors.email ? 'border-red-700' : ''}`}
            />
            {errors.email && <p className="text-red-700 text-[10px]">{errors.email}</p>}

            <button
              type="submit"
              className="btn bg-red-700 text-white mt-4 w-full border-none hover:bg-red-800"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-xs"></span>
                  Sending...
                </span>
              ) : 'Send Reset Link'}
            </button>
          </form>
        )}

        <div className="mt-4 text-center text-sm border-t border-base-300 pt-3">
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