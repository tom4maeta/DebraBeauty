import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Booking() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("Booking sent successfully! We will contact you soon.");
        setLoading(false);

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section
      id="booking"
      className="w-full bg-gradient-to-b from-pink-50 to-white py-24 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl p-10">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 mt-3">
            Schedule your beauty treatment with our professional team.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <input name="name" value={formData.name} onChange={handleChange}
            placeholder="Full Name" required
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Email */}
          <input name="email" value={formData.email} onChange={handleChange}
            placeholder="Email Address" required
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Phone */}
          <input name="phone" value={formData.phone} onChange={handleChange}
            placeholder="Phone Number" required
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Service */}
          <select name="service" value={formData.service} onChange={handleChange} required
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Choose Service</option>
            <option>Facial Treatment</option>
            <option>Makeup Service</option>
            <option>Skincare Consultation</option>
            <option>Bridal Makeup</option>
            <option>Hair Styling</option>
          </select>

          {/* Date */}
          <input type="date" name="date" value={formData.date}
            onChange={handleChange} required
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Time */}
          <input type="time" name="time" value={formData.time}
            onChange={handleChange} required
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Message */}
          <textarea name="message" value={formData.message}
            onChange={handleChange}
            placeholder="Additional message..."
            className="w-full border rounded-lg px-4 py-3"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>

          {/* Status */}
          {success && (
            <p className="text-green-600 text-center mt-3">{success}</p>
          )}
          {error && (
            <p className="text-red-500 text-center mt-3">{error}</p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Booking;