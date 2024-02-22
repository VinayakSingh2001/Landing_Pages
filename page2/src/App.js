import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Offer from "./components/Offer";

function App() {
  return (
    <>
      <Offer />
      <Header />
      <Hero />
      {/* <Features /> */}
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
