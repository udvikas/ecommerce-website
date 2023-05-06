import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css";
import Cart from "../Cart/Cart";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  // const [state, setState] = useState("");
  // const showProduct = () => {
  //   setState([...state]);
  // };
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container expand="lg">
          <Navbar.Brand>
            <h3>E Zone</h3>
          </Navbar.Brand>
          <Navbar.Brand>
            <span className="lnk">
              <span>
                <a href="#home">Home</a>
              </span>
              &nbsp;&nbsp;&nbsp;
              {" | "}
              <span>
                &nbsp;&nbsp;
                <a href="#store">Store</a>
              </span>
              &nbsp;&nbsp;&nbsp;
              {" | "}
              <span>
                &nbsp;&nbsp;&nbsp;
                <a href="#about">About</a>
              </span>
            </span>
          </Navbar.Brand>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            My Cart 
          </Button>
        </Container>
        <Cart show={modalShow}  onHide={() => setModalShow(false)} />
      </Navbar>
      {/* {state &&
        cartElements.map((item, index) => (
          <h4 bg="primary">
            {item.price} {item.title}{" "}
          </h4>
        ))} */}
    </>
  );
};

export default Header;
