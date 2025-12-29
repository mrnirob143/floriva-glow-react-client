import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; 

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '', general: '' }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
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
      const response = await fetch('https://your-backend.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard'); 
      } else {
        // MATCHING REGISTER STYLE: General error message
        setErrors({ general: data.message || 'Login failed' });
      }
    } catch (error) {
      // MATCHING REGISTER STYLE: Server error message
      setErrors({ general: 'Server error. Please try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-xs border p-4 shadow-sm">
        <legend className="fieldset-legend text-2xl font-bold text-red-700 mx-auto px-4 text-center">
          Login
        </legend>

        {/* MATCHING REGISTER STYLE: General Error Banner */}
        {errors.general && (
          <p className="text-red-700 text-sm text-center mb-2">
            {errors.general}
          </p>
        )}

        <form className="flex flex-col gap-1 mt-2" onSubmit={handleSubmit} noValidate>
          
          <label className="label py-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`input input-bordered w-full ${errors.email ? 'border-red-700' : ''}`}
          />
          {/* MATCHING REGISTER STYLE: Small red error text */}
          {errors.email && <p className="text-red-700 text-[10px]">{errors.email}</p>}

          <label className="label py-1 text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`input input-bordered w-full pr-10 ${errors.password ? 'border-red-700' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />} 
            </button>
          </div>
          {/* MATCHING REGISTER STYLE: Small red error text */}
          {errors.password && <p className="text-red-700 text-[10px]">{errors.password}</p>}

          <button
            type="submit"
            className="btn bg-red-700 text-white mt-4 w-full border-none hover:bg-red-800"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="loading loading-spinner loading-xs"></span>
                Logging in...
              </span>
            ) : 'Login'}
          </button>
        </form>

        <div className="mt-3 text-right">
          <Link
            to="/ForgotPassword"
            className="text-xs text-red-700 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="mt-4 text-center text-sm border-t border-base-300 pt-3">
          Don't have an Account?{' '}
          <Link to="/register" className="text-red-700 font-semibold hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;