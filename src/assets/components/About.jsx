import React from "react";
import AboutImage from "../Aboutimage.png";
import { FaLeaf, FaHeart, FaAward } from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "Natural",
    description: "Skin-friendly natural ingredients",
  },
  {
    icon: <FaHeart />,
    title: "Care",
    description: "Gentle care designed for every skin type",
  },
  {
    icon: <FaAward />,
    title: "Quality",
    description: "Premium dermatologically tested products",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-white to-pink-50 py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background decorative glow */}
      <div className="absolute top-16 left-16 w-72 h-72 bg-pink-200 blur-[120px] opacity-30 rounded-full"></div>
      <div className="absolute bottom-16 right-16 w-72 h-72 bg-purple-200 blur-[120px] opacity-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE CARD */}
        <div className="relative w-full group">

          {/* glow background */}
          <div className="absolute -inset-4 bg-pink-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-4">

            <img
              src={AboutImage}
              alt="Debra Beauty premium skincare products"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                Trusted by <span className="text-pink-600">10,000+</span> Clients
              </p>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col">

          <span className="text-pink-600 font-semibold uppercase tracking-widest text-sm">
            About Debra Beauty
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Luxury Skincare For
            <span className="text-pink-600"> Natural Beauty</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Debra Beauty is committed to empowering individuals to embrace
            their natural glow. Our skincare and cosmetic products are crafted
            using high-quality ingredients that nourish, protect, and enhance
            your skin.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Every product we create is designed to provide a luxurious
            self-care experience while delivering visible beauty results.
          </p>

          {/* FEATURES */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="flex justify-center text-pink-600 text-3xl mb-3">
                  {feature.icon}
                </div>

                <h4 className="font-semibold text-gray-800">
                  {feature.title}
                </h4>

                <p className="text-sm text-gray-500 mt-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">

            <div>
              <h3 className="text-3xl font-bold text-pink-600">10K+</h3>
              <p className="text-sm text-gray-500 mt-1">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">50+</h3>
              <p className="text-sm text-gray-500 mt-1">Beauty Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-pink-600">5★</h3>
              <p className="text-sm text-gray-500 mt-1">Customer Ratings</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="/#services"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105"
            >
              Discover Our Story
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;