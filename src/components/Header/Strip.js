import React from "react";
import { Navbar } from "react-bootstrap";

const Strip = () => {
  return (
    <Navbar
      expand="lg"
      style={{
        display: "flex",
        justifyContent: "center",
        color: "#ffffff",
        backgroundColor: "#777777",
        padding:'1rem',
      }}
    >
      <h1 style={{fontSize:'3rem'}}>The Generics</h1>
    </Navbar>
  );
};

export default Strip;
