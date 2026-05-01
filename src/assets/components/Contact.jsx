import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("✨ Message sent successfully. We will contact you soon.");
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        setError("❌ Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white px-4 py-20 flex items-center justify-center">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10">

        {/* ================= LEFT INFO PANEL ================= */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white">

          <h2 className="text-4xl font-bold text-rose-500">
            Contact Debra Beauty 
          </h2>

          <p className="text-gray-600 mt-3 mb-10">
            Reach out for bookings, inquiries, or personalized beauty consultations.
            We respond as fast as possible.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-6 text-gray-700">

            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-rose-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>9654,229st,NW,Edmonton Alberta</p>
               
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaPhoneAlt className="text-rose-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+1(780) 243-7368</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-rose-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>support@deborahbeauty.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FaClock className="text-rose-500 text-lg mt-1" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p>Monday – Saturday: 9:00 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

          </div>


        </div>

        {/* ================= RIGHT FORM ================= */}
        <div className="bg-white shadow-2xl rounded-3xl p-10 border border-gray-100">

          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            Send Us a Message
          </h3>

          <p className="text-gray-500 mb-8">
            Fill in the form below and we’ll get back to you shortly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-300 outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-300 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject (Booking / Inquiry / Feedback)"
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-300 outline-none"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-rose-300 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold py-3 rounded-xl hover:scale-[1.02] transition shadow-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS MESSAGES */}
            {success && (
              <p className="text-green-600 text-center font-medium">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-500 text-center font-medium">
                {error}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;