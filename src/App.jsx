import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Banner from "./assets/components/Banner";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Products from "./assets/components/Products";
import Testimonials from "./assets/components/Testimonials";
import Booking from "./assets/components/Booking";
import Contact from "./assets/components/Contact";
import Cart from "./assets/components/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Footer from "./assets/components/Footer";

// HOME PAGE
function Home() {
  return (
    <>
      <Banner />
      <Products />
      <Cart />
      <Services />
      <About />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;