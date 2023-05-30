import React from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductA.module.css";

const ProductA = (props) => {
  const params = useParams();
  console.log(props.item);
  console.log(params.productID);
  return (
    <section>
      <div className={classes.box}>
        <img src={props.item.imageUrl} alt="images" />
        <div className={classes.detail}>
          <h3>{props.item.title}</h3>
          <h5>Price ${props.item.price}</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In ullam
            consequuntur veritatis voluptate quidem suscipit ex, illo,
            recusandae doloremque harum aliquam dicta aut enim adipisci? Labore
            odio aliquam modi et repudiandae eveniet? Magnam dolore asperiores
            doloribus veniam optio aut, eveniet earum cum quo beatae. Ut magni
            autem tempore voluptate. Modi?
          </p>
          {/* <p>{props.item.quantity}</p> */}
        </div>
      </div>
    </section>
  );
};

export default ProductA;
