import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Cart.css";
import { CartContext } from "../../MyContext";

function Cart(props) {
  const productCart = useContext(CartContext);

  const checkoutHandler = () => {
    if (productCart.items.length >= 1) {
    alert("Congrats! Your Order is Successfully Placed");
    }
  };

  const removeHandler = (item) => {
    productCart.removeItem(item);
    console.log("after removing", productCart);
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
              {console.log("remove quantity", item.quantity)}
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
