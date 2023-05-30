import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mainbar from "./components/Mainbar/Mainbar";
import Strip from "./components/Header/Strip";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import ProductA from "./productDetails/ProductA";
import AuthForm from "./components/Auth/AuthForm";
import { CartContext } from "./MyContext";

function App() {
  const [item_details, setItem_Details] = useState();
  const authCtx = useContext(CartContext);
  const productDetailshandler = (item) => {
    setItem_Details(item);
  };

  return (
    <BrowserRouter>
      <Header />
      <Strip />
      <Routes>
      {!authCtx.isLoggedIn && (
          <Route path="/login" element={<AuthForm/>}/>
        )}
        <Route path="/" element={<Homepage />} />
        <Route path="/store" item={productDetailshandler} element={<Mainbar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/:productID" item={item_details} element={<ProductA />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
