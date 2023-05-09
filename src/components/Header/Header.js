import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css";
import Cart from "../Cart/Cart";
import { CartContext } from "../../MyContext";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  const headerCart = useContext(CartContext);

  let quantity = 0;
  headerCart.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  const showCartHandler = () => {
    if (headerCart.items.length === 0) {
      alert('Please Add Your Item :)')
      setModalShow(false)
    } else{
      setModalShow(true)
    }
  }
  return (
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
        <Button variant="primary" onClick={showCartHandler}>
          <i className="bi bi-bag-check-fill"></i> Cart {quantity}
        </Button>
      </Container>
      <Cart show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default Header;
