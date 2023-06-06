import React, { useContext, useEffect } from "react";
import "./Mainbar.css";
import { Button, Card } from "react-bootstrap";
import { CartContext } from "../../MyContext";
import { NavLink } from "react-router-dom";
import axios from "axios";

const productsArr = [
  {
    id: 1,
    quantity: 1,
    title: "Female Child Colorful art",
    price: 500,
    imageUrl:
      "	https://img.freepik.com/premium-photo/illustration…te-watercolor-paint-generative-ai_894903-4894.jpg",
  },
  {
    id: 2,
    quantity: 1,
    title: "Robots with color art",
    price: 400,
    imageUrl:
      "	https://img.freepik.com/premium-photo/3d-illustrat…obot-creating-masterpiece-workshop_564714-678.jpg",
  },
  {
    id: 3,
    quantity: 1,
    title: "Man colorful art",
    price: 700,
    imageUrl:
      "https://img.freepik.com/premium-photo/man-is-writing-book-is-drawing-with-pencils_786386-682.jpg",
  },
  {
    id: 4,
    quantity: 1,
    title: "Women face Colorful art",
    price: 300,
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/11/28/12/39/makeup-2983550_1280.jpg",
  },
];

const Mainbar = (props) => {
  const cartCntx = useContext(CartContext);
  
  const email = localStorage.getItem('email')  
  const replacedEmail = email.replace("@", "").replace(".", "")
  console.log('cart items',cartCntx.items);

  useEffect(() => {
    console.log('email', email)
    axios
      .get(
        `https://crudcrud.com/api/134952ec7831463fad76bebdb21f9ec8/${replacedEmail}`)
      .then((response) => {
        // Handle successful response
        console.log('cart response',response.data);
        cartCntx.setITEM(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [props.email]);
  


  const addToCartHandler = (item) => {
    console.log("item", item); 
    cartCntx.addItem(item);

    const data = {
      email: props.email,
    };
    axios
      .post(
        `https://crudcrud.com/api/134952ec7831463fad76bebdb21f9ec8/` +
          data.email.replace("@", "").replace(".", ""),
        item
      )
      .then((response) => {
        // Handle successful response
        console.log("data in post", response.data); // data is coming
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

 
  return (
    <>
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
      ></div>
    </>
  );
};

export default Mainbar;
