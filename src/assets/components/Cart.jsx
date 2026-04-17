import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-pink-50 to-white py-24 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="flex items-center gap-3 mb-12">
          <FaShoppingBag className="text-3xl text-pink-600" />
          <h2 className="text-4xl font-extrabold text-gray-900">
            Your Shopping Cart
          </h2>
        </div>

        {cart.length === 0 ? (
          /* EMPTY CART */
          <div className="bg-white shadow-lg rounded-3xl p-12 text-center">

            <FaShoppingBag className="mx-auto text-5xl text-pink-500 mb-6" />

            <h3 className="text-2xl font-semibold text-gray-800">
              Your cart is empty
            </h3>

            <p className="text-gray-500 mt-3">
              Browse our beauty products and add something you love.
            </p>

            <a
              href="/#products"
              className="inline-block mt-6 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Shop Products
            </a>

          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md hover:shadow-xl rounded-2xl p-6 transition"
                >

                  {/* PRODUCT INFO */}
                  <div className="flex items-center gap-6 w-full md:w-auto">

                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-24 h-24 object-cover rounded-xl"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {item.name}
                      </h3>

                      <p className="text-pink-600 font-bold mt-1">
                        ${item.price}
                      </p>
                    </div>

                  </div>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-4 mt-4 md:mt-0">

                    <div className="flex items-center border rounded-full overflow-hidden">

                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="px-4 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* TOTAL */}
                  <div className="text-right mt-4 md:mt-0">

                    <p className="font-bold text-gray-900 text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-4 md:mt-0 transition"
                  >
                    <FaTrash />
                  </button>

                </div>
              ))}

              {/* CLEAR CART BUTTON */}
              <div className="text-right">
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-red-500 transition"
                >
                  Clear Cart
                </button>
              </div>

            </div>

            {/* SUMMARY */}
            <div className="bg-white shadow-xl rounded-3xl p-8 h-fit">

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>$2.50</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${(total + 7.5).toFixed(2)}</span>
                </div>

              </div>

              {/* CHECKOUT BUTTON */}
              <Link to="/checkout">
                <button className="w-full mt-8 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300">
                  Proceed to Payment
                </button>
              </Link>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default Cart;