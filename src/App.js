import React,{useState} from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mainbar from "./components/Mainbar/Mainbar";
import Strip from "./components/Header/Strip";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import ProductA from "./productDetails/ProductA";

function App() {

const [item_details, setItem_Details ] = useState();

  const productDetailshandler = (item) => {
    setItem_Details(item)
  };

  return (
    <>
      <Header />
      <Strip />
      <Routes>
        <Route path="/home" element=<Homepage /> />
        <Route path="/" element=<Mainbar item={productDetailshandler}/> />
        <Route path="/about" element=<AboutPage /> />
        <Route path="/contact" element=<ContactUs /> />
        <Route path="/:productID" element=<ProductA item={item_details}/> />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
