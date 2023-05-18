import React, { useContext } from "react";
import "./Mainbar.css";
import { Button, Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { CartContext } from "../../MyContext";
import { NavLink } from "react-router-dom";
const productsArr = [
  {
    id: 1,
    quantity: 1,
    title: "Blue and Orange Colors",
    price: 100.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: 2,
    quantity: 1,
    title: "Black and white Colors",
    price: 50.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: 3,
    quantity: 1,
    title: "Yellow and Black Colors",
    price: 70.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: 4,
    quantity: 1,
    title: "Blue and Cyan Colors",
    price: 100.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Mainbar = (props) => {
  const cartCntx = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCntx.addItem(item);
  };


  return (
    <>
      <div className="productCard">
        {productsArr.map((item) => (
          <Card key={item.id} style={{ width: "22rem" }}>
            <NavLink to={`/${item.id}`} onClick={() => {props.item(item)}}>
              <Card.Img variant="top" src={item.imageUrl} />
            </NavLink>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>${item.price.toFixed(2)}</Card.Text>
              <Button onClick={() => addToCartHandler(item)}>
                Add To Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ScrollToTop />
      </div>
    </>
  );
};

export default Mainbar;
