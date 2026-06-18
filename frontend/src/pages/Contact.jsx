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
  const [error, setError] = useState(null);

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
        setError(
          err.response?.data?.message || "Something went wrong!",
        );
        setLoading(false);
      });
  };

  return (
      <div>
          <h1>Contact Me</h1>
          {success && <p style={{ color: "green" }}>{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
              <div>
                  <label>Name</label>
                  <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                  />
              </div>

              <div>
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                  />
              </div>

              <div>
                  <label>Subject</label>
                  <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      rows="5"
                  />
              </div>

              <div>
                  <label>Message</label>
                  <textarea
                      name="body"
                      value={formData.body}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows="5"
                  />
              </div>

              <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
              </button>
          </form>
      </div>
  );
}

export default Contact;
