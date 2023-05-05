import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
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
          <Button variant="success">
            My Cart <sup>2</sup>
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
