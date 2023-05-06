import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="primary" className="mt-4" variant="dark">
      <Container>
        <Navbar.Brand>
          <h1> The Generics</h1>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="https://www.youtube.com/"><i className="bi bi-youtube"></i></Nav.Link>
          <Nav.Link href="https://rss.app/"><i className="bi bi-rss"></i></Nav.Link>
          <Nav.Link href="https://www.facebook.com/"><i className="bi bi-facebook"></i></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
