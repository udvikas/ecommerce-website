import React from "react";
import Header from "./components/Header/Header";
import Mainbar from "./components/Mainbar/Mainbar";
import Strip from "./components/Header/Strip";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Strip />
      <Mainbar />
      <Footer />
    </>
  );
}

export default App;
