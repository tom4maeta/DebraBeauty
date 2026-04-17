import React, { useState, useEffect, useContext } from "react";
import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");

  const { cart } = useContext(CartContext);

  const links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-rose-100 py-3"
            : "bg-gradient-to-r from-rose-50 via-pink-50 to-rose-100 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <a href="#" className="flex items-center gap-4 group">

            <div className="relative bg-white/70 backdrop-blur-md p-2 rounded-xl shadow-md group-hover:shadow-lg transition">
              <img
                src={logo}
                alt="Debra Beauty Shop Logo"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-rose-500 tracking-wide">
                DEBRA
              </span>
              <span className="text-xs text-black tracking-widest uppercase">
                Beauty
              </span>
            </div>

          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`relative font-medium transition ${
                  active === link.href
                    ? "text-rose-500"
                    : "text-gray-700 hover:text-rose-500"
                }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-rose-500 transition-all duration-300 ${
                    active === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}

            {/* CART ICON */}
            {cart.length === 0 ? (
              <a href="/#products" className="relative cursor-pointer">
                <FaShoppingCart className="text-xl text-gray-700 hover:text-rose-500 transition" />
              </a>
            ) : (
              <Link to="/cart" className="relative cursor-pointer">
                <FaShoppingCart className="text-xl text-gray-700 hover:text-rose-500 transition" />
                <span className="absolute -top-2 -right-3 bg-rose-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              </Link>
            )}

            {/* CTA BUTTON */}
            <a
              href="#booking"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              Book Now
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-800"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl shadow-lg px-6 py-6 space-y-4">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`block font-medium transition ${
                  active === link.href
                    ? "text-rose-500"
                    : "text-gray-700 hover:text-rose-500"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* CART MOBILE */}
            <div className="flex items-center justify-between pt-2 border-t">

              <span className="font-medium text-gray-700">Cart</span>

              {cart.length === 0 ? (
                <a href="/#products" className="flex items-center gap-2">
                  <FaShoppingCart />
                </a>
              ) : (
                <Link to="/cart" className="flex items-center gap-2">
                  <FaShoppingCart />
                  <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full">
                    {cart.length}
                  </span>
                </Link>
              )}

            </div>

            <a
              href="#booking"
              className="block text-center bg-rose-500 text-white py-3 rounded-full font-semibold hover:bg-rose-600 transition"
            >
              Book Appointment
            </a>

          </div>
        </div>
      </nav>

      {/* NAVBAR SPACING */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;