import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";
import { CartContext } from "../../MyContext";
import axios from "axios";

function Cart(props) {
   
   const productCart = useContext(CartContext);
   const email = props.email

  // useEffect(() => {
  //   console.log('email', email)
  //   axios
  //     .get(
  //       `https://crudcrud.com/api/1c5d77eeb6af4ee69ad66db9edb53c7e/${email}`)
  //     .then((response) => {
  //       // Handle successful response
  //       console.log('cart response',response.data);
       
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error(error);
  //     });
  // }, [props.email]);

  const checkoutHandler = () => {
    if (productCart.items.length >= 1) {
      alert("Congrats! Your Order is Successfully Placed");
    }
  };

  const removeHandler = (item) => {
    productCart.removeItem(item);
  };
  const increaseHandler = (item) => {
    productCart.increaseQty(item);
  };

  const decreaseHandler = (item) => {
    productCart.decreseQty(item);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Product Cart
        </Modal.Title>
      </Modal.Header>
      {productCart.items.map((item) => (
        <Modal.Body key={item.id}>
          <div className="modiCart">
            <img src={item.imageUrl} alt="images" />
            <h5>{item.title}</h5>
            <h6>${item.price.toFixed(2)}</h6>
            <div className="qty">
              <button onClick={() => decreaseHandler(item)} className="minus">
                -
              </button>
              <h5>{item.quantity}</h5>
              <button onClick={() => increaseHandler(item)} className="plus">
                +
              </button>
            </div>
            <h6>${(item.price * item.quantity).toFixed(2)}</h6>
            <Button variant="danger" onClick={() => removeHandler(item)}>
              <i className="bi bi-trash3-fill"></i>
            </Button>
          </div>
        </Modal.Body>
      ))}
      <hr />
      {productCart.items.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <div className="total">
          <h4>Total Amount</h4>
          <h4>${productCart.totalAmount.toFixed(2)}</h4>
        </div>
      )}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={checkoutHandler}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Cart;
