import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10)
      newErrors.message = "Message should be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white text-center py-16 sm:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-sm sm:text-lg md:text-xl opacity-90">
            Have a question or feedback? Our team is here to help you glow!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-700 mb-6 font-serif text-center lg:text-left">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full border rounded-xl px-4 py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-red-700/20 focus:border-red-700"
                }`}
              />
              {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full border rounded-xl px-4 py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-red-700/20 focus:border-red-700"
                }`}
              />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1 text-sm sm:text-base">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help?"
                className={`w-full border rounded-xl px-4 py-3 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-red-700/20 focus:border-red-700"
                }`}
              />
              {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="bg-red-700 text-white font-bold px-6 py-3 sm:py-4 rounded-xl hover:bg-red-800 active:scale-[0.98] transition-all w-full text-base sm:text-lg shadow-lg shadow-red-700/20 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Social Links */}
        <div className="flex-1 flex flex-col gap-8 w-full">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-4 font-serif text-center lg:text-left">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center lg:text-left text-sm sm:text-base">
              Prefer to talk? We're available via phone or email during business hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full text-red-700">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">123 Skincare Lane, Dhaka</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                <div className="bg-red-50 p-3 rounded-full text-red-700">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">+880 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white shadow-sm border border-gray-100 sm:col-span-2">
                <div className="bg-red-50 p-3 rounded-full text-red-700">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">info@florivaglow.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our Journey */}
          <div className="pt-6 border-t border-gray-200 flex flex-col items-center sm:items-start gap-4">
            <h4 className="text-xl font-bold text-gray-900 text-center sm:text-left">Join Our Journey</h4>
            <div className="flex gap-4 justify-center sm:justify-start flex-wrap">
              <Link className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-red-700 hover:bg-red-700 hover:text-white transition-all shadow-sm" to="#"><FaFacebook size={18} /></Link>
              <Link className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-red-700 hover:bg-red-700 hover:text-white transition-all shadow-sm" to="#"><FaInstagram size={18} /></Link>
              <Link className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-red-700 hover:bg-red-700 hover:text-white transition-all shadow-sm" to="#"><FaTwitter size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
