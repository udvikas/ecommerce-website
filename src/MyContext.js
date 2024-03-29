import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseQty: (id) => {},
  decreseQty: (id) => {},
  token: "",
  isLoggedIn: false,
  Login: (token) => {},
  Logout: () => {},
});

export const ContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const initialToken = localStorage.getItem("tokenID");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; //true
 
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("tokenID", token);
  };


  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("tokenID");
    localStorage.removeItem("tokenExpiration");
    setCartItems([]);
  };

  const addItemHandler = (item) => {
    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id);
    const requiredItems = cartItems[ID];
    if (ID === -1) {
      setCartItems([...itemCopy, item]);
    } else {
      setCartItems((prev) => {
        prev[ID] = { ...requiredItems, quantity: requiredItems.quantity + 1 };
        return [...prev];
      });
    }
  };

  const setITEMS = (data) => {
    setCartItems(data)
  }

  const removeFromCart = (item) => {
    let findCartItem = cartItems.findIndex((el) => el.id === item.id);
    cartItems[findCartItem].quantity = 0;
    let itemCopy = [...cartItems];

    const reqItem = itemCopy.filter((el) => el.id !== item.id);
    setCartItems([...reqItem]);
  };

  const increaseQtyHandler = (item) => {
    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id);
    if (ID !== -1) {
      itemCopy[ID].quantity++;
      setCartItems(itemCopy);
    }
  };

  const decreaseQtyHandler = (item) => {
    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id);
    if (ID !== -1 && itemCopy[ID].quantity < 2) {
      itemCopy.splice(ID, 1);
      setCartItems(itemCopy);
    } else {
      itemCopy[ID].quantity--;
      setCartItems(itemCopy);
    }
  };

  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalPrice = totalPrice + Number(item.price * item.quantity);
  });

  const itemContext = {
    items: cartItems,
    addItem: addItemHandler,
    removeItem: removeFromCart,
    increaseQty: increaseQtyHandler,
    decreseQty: decreaseQtyHandler,
    totalAmount: totalPrice,
    token: token,
    isLoggedIn: userIsLoggedIn,
    Login: loginHandler,
    Logout: logoutHandler,
    setITEM:setITEMS,
  };
  return (
    <CartContext.Provider value={itemContext}>
      {props.children}
    </CartContext.Provider>
  );
};

