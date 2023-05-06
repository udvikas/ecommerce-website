import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './Cart.css';
const cartElements = [
  {
    title: "Blue and Orange Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

function Cart(props) {

    const checkoutHandler = () => {
        alert('Congrats! Your Order is Successfully Placed')
    }
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
      {cartElements.map((item,index) => (
        <Modal.Body key={index}>
          <div className="modiCart">
          <img src={item.imageUrl} alt="images"  />
          <h5>{item.title}</h5>
          <div className="qty">
          <button className="minus">-</button>
          <h5>{item.quantity}</h5>
          <button className="plus">+</button>
          </div>
          <h6>${item.price}</h6>
          <Button variant="danger"><i className="bi bi-trash3-fill"></i></Button>
          </div>
        </Modal.Body>
      ))}
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={checkoutHandler}>Checkout</Button>
        <h4>Total $220</h4>
      </Modal.Footer>
    </Modal>
  );
}
export default Cart;
