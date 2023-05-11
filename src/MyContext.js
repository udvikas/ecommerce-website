import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQty: (id) => {},
  decreseQty: (id) => {},
});

export const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemHandler = (item) => {

    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id) 
    if (ID === -1) {
      setCartItems([...itemCopy,item])
    } else {
      itemCopy[ID].quantity++;
      setCartItems(itemCopy)
    }
  };

  const removeFromCart = (item) => {
    let itemCopy = [...cartItems];

    let ID = itemCopy.findIndex((el) => el.id === item.id);
    if(ID !== -1){
    itemCopy.splice(ID, 1)
    setCartItems(itemCopy)
    }
  };

  const increaseQtyHandler = (item) => {
    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id)
    if (ID !== -1) {
      itemCopy[ID].quantity++;
      setCartItems(itemCopy)
    }
  }
  const decreaseQtyHandler = (item) => {
    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex(el => el.id === item.id)
    if(ID !== -1 && itemCopy[ID].quantity < 2) {
      itemCopy.splice(ID, 1)
      setCartItems(itemCopy)
    } else {
      itemCopy[ID].quantity--;
      setCartItems(itemCopy);
    }
  }

  let totalPrice = 0
  cartItems.forEach(item => {
    totalPrice = totalPrice + Number(item.price * item.quantity)
  });

  const itemContext = {
    items: cartItems,
    addItem: addItemHandler,
    removeItem: removeFromCart,
    increaseQty:increaseQtyHandler,
    decreseQty:decreaseQtyHandler,
    totalAmount:totalPrice,
  };
  return (
    <CartContext.Provider value={itemContext}>
      {props.children}
    </CartContext.Provider>
  );
};
