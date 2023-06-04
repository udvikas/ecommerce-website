import React, { useContext, useState, useEffect } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { CartContext } from "../../MyContext";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const headerCart = useContext(CartContext);
  const isLoggedIn = headerCart.isLoggedIn;
 

  let quantity = 0;
  headerCart.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });

  const logoutHandler = () => {
    headerCart.Logout();
    console.log('successfully logged out!')
    navigate('/');
    localStorage.removeItem('email');
 }

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
          <header className={classes.header}>
            <nav>
              <ul>
                <li>
                  <NavLink to="/">HOME</NavLink>
                </li>
               {headerCart.isLoggedIn && <li>
                  <NavLink to="/store">STORE</NavLink>
                </li>}
                <li>
                  <NavLink to="/about">ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">CONTACT</NavLink>
                </li>
                  {!isLoggedIn && (
                    <li>
                      <NavLink to="/login">LOGIN</NavLink>
                    </li>
                  )}
                {isLoggedIn && (
                  <li>
                    <button onClick={logoutHandler}>LOGOUT</button>
                  </li>
                )}
              </ul>
            </nav>
          </header>
        </Container>

        <Button
          style={{ marginRight: "4rem" }}
          variant="primary"
          onClick={() => setModalShow(true)}
        >
          <i className="bi bi-bag-check-fill"></i> Cart{" "}
          <span className="badge bg-secondary">{quantity}</span>
        </Button>
        <Cart email={props.email} show={modalShow} onHide={() => setModalShow(false)} />
      </Navbar>
    </>
  );
};

export default Header;
