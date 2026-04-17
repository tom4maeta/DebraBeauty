import { PayPalButtons } from "@paypal/react-paypal-js";
import { useContext, useMemo, useCallback } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function PayPalCheckout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  if (total <= 0) {
    return (
      <div className="text-center text-gray-600">
        Your cart is empty. Add items before proceeding to payment.
      </div>
    );
  }

  const handleCreateOrder = useCallback(
    (data, actions) => {
      console.log("PayPal createOrder called - total:", total);
      return actions.order.create({
        purchase_units: [
          {
            description: "Debra Beauty Products",
            amount: {
              value: total.toFixed(2),
            },
          },
        ],
      });
    },
    [total]
  );

  const handleOnApprove = useCallback(
    (data, actions) => {
      console.log("PayPal onApprove - data:", data);
      return actions.order
        .capture()
        .then((details) => {
          console.log("PayPal capture details:", details);
          try {
            clearCart(); // clear cart after payment
          } catch (e) {
            console.error("clearCart error:", e);
          }
          navigate("/success");
        })
        .catch((err) => {
          console.error("capture error:", err);
          alert("Payment capture failed. Please try again.");
        });
    },
    [clearCart, navigate]
  );

  const handleOnCancel = useCallback((data) => {
    console.log("PayPal payment cancelled:", data);
    alert("Payment was cancelled.");
  }, []);

  const handleOnError = useCallback((err) => {
    console.error("PayPal error:", err);
    alert("Payment failed. Please try again.");
  }, []);

  return (
    <PayPalButtons
      forceReRender={[total]}
      createOrder={handleCreateOrder}
      onApprove={handleOnApprove}
      onCancel={handleOnCancel}
      onError={handleOnError}
    />
  );
}

export default PayPalCheckout;