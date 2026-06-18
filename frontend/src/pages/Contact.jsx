import { useState } from "react";
import api from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError]     = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    api.post("/contact", formData)
      .then((response) => {
        setSuccess("Your message has been sent successfully!");
        setFormData({ name: "", email: "", subject: "", body: "" });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Something went wrong!");
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-900 min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Contact <span className="text-blue-400">Me</span>
        </h1>

        {/* Success Message */}
        {success && (
          <p className="bg-green-800 text-green-200 px-4 py-3 rounded-lg mb-6">
            ✅ {success}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="bg-red-800 text-red-200 px-4 py-3 rounded-lg mb-6">
            ❌ {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm font-semibold">Message</label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;