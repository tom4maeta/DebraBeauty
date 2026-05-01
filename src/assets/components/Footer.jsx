import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-rose-50 via-pink-50 to-white border-t">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-rose-500">
              Debra Beauty
            </h2>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Luxury beauty company offering premium skincare, makeup, bridal styling,
              and personalized beauty experiences.
            </p>
          </div>

          {/* QUICK LINKS (FUNCTIONAL) */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="/" className="text-gray-600 hover:text-rose-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/#products" className="text-gray-600 hover:text-rose-500 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="/#services" className="text-gray-600 hover:text-rose-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="/#booking" className="text-gray-600 hover:text-rose-500 transition">
                  Booking
                </a>
              </li>

              <li>
                <a href="/#contact" className="text-gray-600 hover:text-rose-500 transition">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>

            <p className="text-sm text-gray-600">
              📍 9654, 229st , NW , Edmonton Alberta
            </p>

            <p className="text-sm text-gray-600 mt-2">
              📞 +1(780) 243-7368
            </p>

            <p className="text-sm text-gray-600 mt-2">
              ✉️ support@deborahbeauty.co.ke
            </p>
          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 border-t"></div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">

          {/* COPYRIGHT */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Debra Beauty . All Rights Reserved.
          </p>

          {/* DEVELOPER CREDIT */}
          <p className="text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-rose-500">
              NexoShield Technology Solutions
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;