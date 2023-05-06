import React from "react";
import "./Mainbar.css";
import { Button, Card } from "react-bootstrap";

const Mainbar = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  return (
    <>
    <div className="productCard">
      {productsArr.map((item,index) => (
        <Card key={index} style={{ width: "22rem" }}>
          <Card.Img variant="top" src={item.imageUrl} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Button>Add To Cart</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    <div className="mt-3" style={{display:'flex', justifyContent:'center'}}>
    <Button variant="info" size="lg">Go to Cart</Button>
    </div>
</>
  );
};

export default Mainbar;
