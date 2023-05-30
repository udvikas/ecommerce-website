import React, { useContext } from "react";
import "./Mainbar.css";
import { Button, Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { CartContext } from "../../MyContext";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const productsArr = [
  {
    id: 1,
    quantity: 1,
    title: "First face Colorful art",
    price: 500,
    imageUrl:'https://cdn.pixabay.com/photo/2017/12/01/08/02/paint-2990357_1280.jpg',
  },
  {
    id: 2,
    quantity: 1,
    title: "Second face Colorful art",
    price: 400,
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/29/09/15/paint-2985569_1280.jpg",
  },
  {
    id: 3,
    quantity: 1,
    title: "Third face Colorful art",
    price: 700,
    imageUrl: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg",
  },
  {
    id: 4,
    quantity: 1,
    title: "Fouth face Colorful art",
    price: 300,
    imageUrl: "https://cdn.pixabay.com/photo/2017/11/28/12/39/makeup-2983550_1280.jpg",
  },
];

const Mainbar = (props) => {
  const cartCntx = useContext(CartContext);
  const isLoggedIn = cartCntx.isLoggedIn;
  const navigate = useNavigate();
  const addToCartHandler = (item) => {
    cartCntx.addItem(item);
  };

  return (
    <>
      <h5> {props.name && `Hi! ${props.name}`}</h5>
      <div className="productCard">
        {productsArr.map((item) => (
          <Card key={item.id} style={{ width: "22rem" }}>
            <NavLink
              to={`/${item.id}`}
              onClick={() => {
                props.item(item);
              }}
            >
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
