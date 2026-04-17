import React from "react";

import Facial from "../images/facial.jpeg";
import Makeup from "../images/makeup.jpg";
import Skincare from "../images/skincare.jpg";
import Spa from "../images/spa.jpeg";
import Hair from "../images/hair.jpg";
import Massage from "../images/massage.jpeg";

const services = [
  {
    name: "Luxury Facial Treatment",
    image: Facial,
    price: "$60",
    discount: "20% OFF",
    description: "Deep cleansing facial treatment for glowing healthy skin."
  },
  {
    name: "Professional Makeup",
    image: Makeup,
    price: "$80",
    discount: "15% OFF",
    description: "Perfect makeup for events, weddings, and special occasions."
  },
  {
    name: "Premium Skincare Therapy",
    image: Skincare,
    price: "$55",
    discount: "10% OFF",
    description: "Revitalize your skin with dermatologist-approved skincare."
  },
  {
    name: "Luxury Spa Experience",
    image: Spa,
    price: "$120",
    discount: "25% OFF",
    description: "Relax and rejuvenate with our premium spa treatments."
  },
  {
    name: "Hair Styling & Treatment",
    image: Hair,
    price: "$45",
    discount: "10% OFF",
    description: "Professional hair styling designed for your perfect look."
  },
  {
    name: "Body Massage Therapy",
    image: Massage,
    price: "$70",
    discount: "20% OFF",
    description: "Relieve stress and tension with our relaxing massage."
  }
];

function Services() {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-pink-50 to-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">

          <span className="text-pink-600 font-semibold uppercase tracking-widest text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Premium Beauty Treatments
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover luxury beauty services crafted to enhance your natural beauty
            and deliver the ultimate self-care experience.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={service.image}
                  alt={service.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* DISCOUNT BADGE */}
                <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {service.discount}
                </div>

                {/* PRICE TAG */}
                <div className="absolute bottom-4 right-4 bg-white text-pink-600 font-bold px-4 py-2 rounded-full shadow">
                  {service.price}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>

                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* BUTTON */}
                <a href="#booking" className="mt-6 block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300">
                  Book Service
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Services;