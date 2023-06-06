import React, { Suspense, lazy, useContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Mainbar from "./components/Mainbar/Mainbar";
import Strip from "./components/Header/Strip";
import AboutPage from "./pages/AboutPage";
import { Routes, Route, useLocation } from "react-router-dom";
// import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/Homepage";
import ProductA from "./productDetails/ProductA";
import AuthForm from "./components/Auth/AuthForm";
import { CartContext } from "./MyContext";

const ContactUs = lazy(() => import('./pages/ContactUs'))
function App() {
  const [item_details, setItem_Details] = useState(
    JSON.parse(localStorage.getItem("item_details"))
  );
  const authCtx = useContext(CartContext);
  const location = useLocation();
  const { email } = location.state || {};
  
  const productDetailshandler = (item) => {
    setItem_Details(item);
    localStorage.setItem("item_details", JSON.stringify(item));
  };

  return (
    <>
      <Header email={email} />
      <Strip />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {!authCtx.isLoggedIn && <Route path="/login" element={<AuthForm />} />}
        <Route
          path="/store"
          element={
            <Mainbar
              email={email}
              item={productDetailshandler}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Suspense fallback={<p>Loading...</p>}><ContactUs /></Suspense>} />
        <Route path="/:productID" element={<ProductA item={item_details} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
