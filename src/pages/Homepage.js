import "./HomePage.css";
import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../MyContext";

const Homepage = () => {
  const homeCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (!homeCtx.isLoggedIn) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  // {!homeCtx.isLoggedIn ? 'Go to Store' : ''}
  const image1 =
    "https://rare-gallery.com/uploads/posts/5334415-gallery-art-painting-man-guy-male-browse-coat-jacket-display-grid-wall-hanging-artist-colour-artwork-person-museum-free-images.jpg";
  return (
    <>
      <h1>Welcome to Art Gallery</h1>
      <div className="demo">
        {!homeCtx.isLoggedIn && <button className="btn btn-outline-info" onClick={handleShow}>
          Go to Store
        </button>}
      </div>
      <div className="art">
        <img src={image1} alt="art gallery" />
        <img src={image1} alt="art gallery" />
        <img src={image1} alt="art gallery" />
        <img src={image1} alt="art gallery" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oops! You are not Logged In!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="heading">
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Login here!
            </NavLink>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Homepage;
