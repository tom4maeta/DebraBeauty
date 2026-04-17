import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PayPalScriptProvider
      options={{
        "client-id": "AW6Y-wONynBLju2S-IWmMrvQiXCJxB5ExYluRxp2mORdl0ts_8QbyXt6RmslTISRlI8IuDxTeZDurVhA",
        currency: "USD", // or "KES"
      }}
    >
      <CartProvider>
        <App />
      </CartProvider>
    </PayPalScriptProvider>
  </StrictMode>,
)