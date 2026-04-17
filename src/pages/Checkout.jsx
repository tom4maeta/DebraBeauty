import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import PayPalCheckout from "../assets/components/PayPalCheckout";

function Checkout() {

  const { cart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-pink-50 py-20 px-6">

      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold mb-6">
          Secure Checkout
        </h2>

        {/* ORDER SUMMARY */}
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between border-b py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <div className="flex justify-between font-bold text-xl mt-6">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="mt-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/cart" className="px-6 py-2 rounded-full border border-rose-500 text-rose-500 font-semibold hover:bg-rose-50 transition">
              ← Back to Cart
            </Link>

            <div className="flex-1">
              <PayPalCheckout />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Checkout;