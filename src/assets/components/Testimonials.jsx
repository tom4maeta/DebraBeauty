import React from "react";
import { FaStar } from "react-icons/fa";

import Client1 from "../images/client1.jpeg";
import Client2 from "../images/client2.png";
import Client3 from "../images/client3.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    image: Client1,
    rating: 5,
    review:
      "Debra Beauty completely transformed my skincare routine. My skin has never felt this smooth and radiant. Highly recommended!",
  },
  {
    id: 2,
    name: "David Johnson",
    image: Client2,
    rating: 5,
    review:
      "The facial treatment was amazing! The staff were professional and the products are top quality. I love the glow my skin has now.",
  },
  {
    id: 3,
    name: "John Brown",
    image: Client3,
    rating: 4,
    review:
      "I tried their Vitamin C serum and it works wonders. My complexion is brighter and healthier. Definitely buying again!",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-white to-pink-50 py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="text-pink-600 font-semibold uppercase tracking-widest text-sm">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from our happy clients who trust Debra Beauty for premium skincare
            and beauty treatments.
          </p>

        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition duration-500"
            >

              {/* Client Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-20 h-20 rounded-full object-cover border-4 border-pink-100"
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center text-yellow-400 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Testimonials;