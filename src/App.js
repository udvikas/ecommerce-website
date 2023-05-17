import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mainbar from "./components/Mainbar/Mainbar";
import Strip from "./components/Header/Strip";
import AboutPage from "./pages/AboutPage";
import {Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <Strip />
      <Routes>
        <Route path="/home" element=<Homepage /> />
        <Route exact path="/store" element=<Mainbar /> />
        <Route path="/about" element=<AboutPage /> />
        <Route path="/contact" element=<ContactUs /> />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
