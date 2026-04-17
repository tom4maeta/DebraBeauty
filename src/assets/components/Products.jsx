import React, { useContext } from "react";
import { FaStar, FaShoppingCart, FaCheck } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";

import Product1 from "../images/product1.jpeg";
import Product2 from "../images/product2.jpeg";
import Product3 from "../images/product3.jpg";
import Product4 from "../images/product4.jpeg";
import Product5 from "../images/product5.jpg";
import Product6 from "../images/product6.jpeg";
import Product7 from "../images/product7.jpeg";
import Product8 from "../images/product8.jpeg";
import Product9 from "../images/product9.jpeg";

const products = [
  { id: 1, name: "Vitamin C Glow Serum", image: Product1, price: 45, oldPrice: 60, discount: "25% OFF", rating: 5 },
  { id: 2, name: "Hydrating Face Cream", image: Product2, price: 35, oldPrice: 50, discount: "30% OFF", rating: 4 },
  { id: 3, name: "Luxury Facial Cleanser", image: Product3, price: 25, oldPrice: 35, discount: "20% OFF", rating: 5 },
  { id: 4, name: "Skin Brightening Toner", image: Product4, price: 28, oldPrice: 40, discount: "15% OFF", rating: 4 },
  { id: 5, name: "Anti-Aging Night Cream", image: Product5, price: 55, oldPrice: 70, discount: "20% OFF", rating: 5 },
  { id: 6, name: "Organic Lip Care Balm", image: Product6, price: 15, oldPrice: 20, discount: "10% OFF", rating: 4 },
  { id: 7, name: "Glow Face Mask", image: Product7, price: 22, oldPrice: 30, discount: "25% OFF", rating: 4 },
  { id: 8, name: "Rejuvenating Eye Serum", image: Product8, price: 30, oldPrice: 40, discount: "15% OFF", rating: 5 },
  { id: 9, name: "Nourishing Body Oil", image: Product9, price: 20, oldPrice: 25, discount: "10% OFF", rating: 4 },
];

function Products() {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  return (
    <section
      id="products"
      className="w-full bg-gradient-to-b from-pink-50 to-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-pink-600 font-semibold uppercase tracking-widest text-sm">
            Our Products
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Beauty Essentials
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover premium skincare crafted to enhance your natural glow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {products.map((product) => {
            const isInCart = cart.some((item) => item.id === product.id);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition duration-700"
                  />

                  {/* DISCOUNT BADGE */}
                  <div className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {product.discount}
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

                    {isInCart ? (
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg"
                      >
                        Remove
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2"
                      >
                        <FaShoppingCart />
                        Add
                      </button>
                    )}

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 text-center">

                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  {/* RATING */}
                  <div className="flex justify-center mt-2 text-yellow-400">
                    {[...Array(product.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* PRICE */}
                  <div className="mt-3 flex justify-center items-center gap-3">

                    <span className="text-xl font-bold text-pink-600">
                      ${product.price}
                    </span>

                    <span className="text-gray-400 line-through text-sm">
                      ${product.oldPrice}
                    </span>

                  </div>

                  {/* BUTTON */}
                  {isInCart ? (
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mt-6 mx-auto bg-green-500 text-white px-6 py-2 rounded-full flex items-center gap-2"
                    >
                      <FaCheck />
                      Added
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-6 mx-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full flex items-center gap-2 transition"
                    >
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Products;