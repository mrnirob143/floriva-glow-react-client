import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Camera } from 'lucide-react'; 

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files[0]) {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

    // Phone Validation
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (/[a-zA-Z]/.test(formData.phone)) {
      newErrors.phone = 'Phone number cannot contain letters';
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Only digits are allowed';
    } else if (formData.phone.length !== 11) {
      newErrors.phone = `Must be 11 digits (Current: ${formData.phone.length})`;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Min 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const dataToSend = new FormData();
      dataToSend.append('name', formData.name);
      dataToSend.append('email', formData.email);
      dataToSend.append('phone', formData.phone);
      dataToSend.append('password', formData.password);
      if (formData.image) dataToSend.append('image', formData.image);

      const response = await fetch('https://your-backend.com/api/register', {
        method: 'POST',
        body: dataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setErrors({ general: data.message || 'Registration failed' });
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
          Register
        </legend>

        {errors.general && <p className="text-red-700 text-sm text-center mb-2">{errors.general}</p>}

        {/* Photo Upload Area */}
        <div className="mt-2 text-center">
          <label className="cursor-pointer inline-block relative group">
            <input type="file" name="image" accept="image/*" className="hidden" onChange={handleChange} />
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-red-700 flex items-center justify-center overflow-hidden bg-white hover:bg-gray-50 transition-all border-dashed">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="flex flex-col items-center text-red-700">
                  <Camera size={24} />
                  <span className="text-[10px] font-bold mt-1 uppercase tracking-tight">Add Photo</span>
                </div>
              )}
            </div>
            {/* Small camera overlay when image is present */}
            {preview && (
              <div className="absolute bottom-0 right-0 bg-red-700 p-1.5 rounded-full border border-white text-white">
                <Camera size={12} />
              </div>
            )}
          </label>
        </div>

        <form className="flex flex-col gap-1 mt-2" onSubmit={handleSubmit} noValidate>
          <label className="label py-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`input input-bordered w-full ${errors.name ? 'border-red-700' : ''}`}
          />
          {errors.name && <p className="text-red-700 text-[10px]">{errors.name}</p>}

          <label className="label py-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`input input-bordered w-full ${errors.email ? 'border-red-700' : ''}`}
          />
          {errors.email && <p className="text-red-700 text-[10px]">{errors.email}</p>}

          <label className="label py-1 text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="01XXXXXXXXX"
            className={`input input-bordered w-full ${errors.phone ? 'border-red-700' : ''}`}
          />
          {errors.phone && <p className="text-red-700 text-[10px] font-bold italic">{errors.phone}</p>}

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
          {errors.password && <p className="text-red-700 text-[10px]">{errors.password}</p>}

          <label className="label py-1 text-sm font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className={`input input-bordered w-full pr-10 ${errors.confirmPassword ? 'border-red-700' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-700"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />} 
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-700 text-[10px]">{errors.confirmPassword}</p>}

          <button
            type="submit"
            className="btn bg-red-700 text-white mt-4 w-full border-none hover:bg-red-800"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="loading loading-spinner loading-xs"></span>
                Registering...
              </span>
            ) : 'Register'}
          </button>
        </form>

        <div className="mt-3 text-center text-sm">
          Already have an Account?{' '}
          <Link to="/login" className="text-red-700 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;