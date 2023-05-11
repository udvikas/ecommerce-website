import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css";
import Cart from "../Cart/Cart";
import { CartContext } from "../../MyContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  const headerCart = useContext(CartContext);

  let quantity = 0;
  headerCart.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="navbarhead"
      >
        <Container expand="lg">
          <Navbar.Brand>
            <h3>E Zone</h3>
          </Navbar.Brand>
          <Navbar.Brand>
            <span className="navtab">
              <NavLink
                to="/home"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                HOME
              </NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink
                to="/store"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                STORE
              </NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink
                to="/about"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                ABOUT
              </NavLink>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </Navbar.Brand>
        </Container>
        <Button
          style={{ marginRight: "4rem" }}
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          <i className="bi bi-bag-check-fill"></i> Cart{" "}
          <span className="badge bg-secondary">{quantity}</span>
        </Button>
        <Cart show={modalShow} onHide={() => setModalShow(false)} />
      </Navbar>
    </>
  );
};

export default Header;
