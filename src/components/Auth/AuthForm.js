import { useState, useRef, useContext } from "react";
import {  useNavigate } from 'react-router-dom';
import classes from "./AuthForm.module.css";
import { CartContext } from "../../MyContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(CartContext);
  const navigate = useNavigate();
  const emailInputRef = useRef(); 
  const passwordInputRef = useRef();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value; 
    console.log(enteredEmail);
    const enteredPassword = passwordInputRef.current.value; 
    console.log(enteredPassword);
    // optional: Add Validation
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
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setIsLoading(false);

      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          // //show error modal

          let errorMessage = "Authentication failed";
          throw new Error(errorMessage);
        });
      }
    }).then((data) =>{
      authCtx.Login(data.idToken);
      localStorage.setItem("email", enteredEmail);
      navigate('/store', { state: { email:enteredEmail, password:enteredPassword } });

      console.log('successfully logged in!')
    }).catch((err) => {
      alert(err.message)
    })
  };
  
  return (
    <>
    <h1>{ isLogin ? 'Login' : 'Signup'}</h1>
    <section className={classes.auth}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Submit"}</button>
          )}
          {isLoading && <p>Sending Request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create New Account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
    </>
  );
};

export default AuthForm;
