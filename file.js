//My Context File

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
  const initialToken = localStorage.getItem('tokenId');
  const [ token, setToken ] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = () => {
    setToken(token);
    localStorage.setItem('tokenId', token);
  }
 const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('tokenId');
 }

  const addItemHandler = (item) => {

    let itemCopy = [...cartItems];
    let ID = itemCopy.findIndex((el) => el.id === item.id) 
    const requiredItems = cartItems[ID]
    if (ID === -1) {
      setCartItems([...itemCopy,item])
    } else {
      
      setCartItems((prev) => {
        prev[ID] = {...requiredItems, quantity:requiredItems.quantity + 1}
        return [...prev]
      })
    }
  };

  const removeFromCart = (item) => {
    let findCartItem = cartItems.findIndex((el) => el.id === item.id);
    console.log(findCartItem);
    cartItems[findCartItem].quantity = 0;
    let itemCopy = [...cartItems];

    const reqItem = itemCopy.filter((el) => el.id !== item.id)
    setCartItems([...reqItem]);
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
    token:token,
    isLoggedIn:userIsLoggedIn,
    Login:loginHandler,
    Logout:logoutHandler,
  };
  return (
    <CartContext.Provider value={itemContext}>
      {props.children}
    </CartContext.Provider>
  );
};




//LoginPage File

import {useState, useContext, useRef } from "react";
import { CartContext } from "../MyContext";
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
const [ isLogin, setIsLogin ] = useState(true);
const [isLoading, setIsLoading ] = useState(false);
const loginCtx  = useContext(CartContext);
const emailRef = useRef();
const passowordRef = useRef();
const navigate = useNavigate();

const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState)
}

    const loginHandler = (event) => {
        event.preventDefault();
        let enteredEmail = emailRef.current.value;
        let enteredPassword = passowordRef.current.value;
        setIsLoading(true);

        let url;
        if (isLogin) {
            url =
              "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCM6g16Qv7IXnELyRQ7cS54ndvlSMyo8Y0";
          } else {
            url =
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCM6g16Qv7IXnELyRQ7cS54ndvlSMyo8Y0";
          }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true,
            }),
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            setIsLoading(false);

            if(res.ok) {
                return res.json()
            } else {
                return res.json().then((data) => {
                    console.log(data);

                    let errorMessage = 'Authentication Failed'
                    throw new Error(errorMessage);

                })
            }
        }).then((data) => {
            loginCtx.Login(data.idToken);
            navigate.replace('/')

            console.log(data);
            console.log('successfully logged in')
        }).then(() => {
            let errorMessage = 'Authentication Failed'
            throw new Error(errorMessage);
        }).catch(err => {alert(err.message)})
    }

  return (
    <>
    <h1>{isLogin ? 'Login' : 'Signup'}</h1>
    <form className="container1" onSubmit={loginHandler}>
      <div className="card">
        <div>
          <label htmlFor="">Your Email</label>
          <input type="email" ref={emailRef}/>
        </div>
        <div>
          <label htmlFor="">Your Password</label>
          <input type="password" ref={passowordRef}/>
        </div>

        <div>
        {!isLoading && 
            <button type="button">{isLogin ? 'Login' : 'Create Account'}</button> }&nbsp;
            {isLoading && <p>Sending Request...</p>}
            <button type="button" onClick={switchAuthModeHandler}>{isLogin ? "Create new account" : "Login with existing account"}</button>
        </div>
      </div>
    </form>
   </>
  );
};
export default LoginPage;



