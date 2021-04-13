import React, { useState, useContext } from "react";
import { userContext } from "../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  FbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginMenegar";
import { Form } from "react-bootstrap";
import "./Login.css";
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  //use initializeApp firebase.
  initializeLoginFramework();
  //App.js context api userContext
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };
  //   const googleSignOut = () => {
  //     handleSignOut().then((res) => {
  //       handleResponse(res, true);
  //     });
  //   };
  const handleFb = () => {
    FbSignIn().then((res) => {
      handleResponse(res, false);
    });
  };
  //handleResponse function
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  //form validation
  const handleChange = (e) => {
    let emailValid = true;
    if (e.target.name === "email") {
      emailValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(emailValid);
    }
    if (e.target.name === "password") {
      const passwordValid = e.target.value.length >= 6;
      emailValid = passwordValid;
      console.log(passwordValid);
    }
    if (emailValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  return (
    <div className="form_wrapper">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 offset-3 loginCard">
            <Form className="loginFrom" onSubmit={handleSubmit}>
              <h4>{newUser ? "Log In" : "Create an account"}</h4>
              {newUser && (
                <Form.Group className="mt-4">
                  <Form.Control
                    onBlur={handleChange}
                    name="Fname"
                    className="formInput"
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
              )}
              {newUser && (
                <Form.Group className="mt-4">
                  <Form.Control
                    onBlur={handleChange}
                    name="Lname"
                    className="formInput"
                    type="text"
                    placeholder="Lest Name"
                  />
                </Form.Group>
              )}
              <Form.Group className="mt-4">
                <Form.Control
                  onBlur={handleChange}
                  name="email"
                  className="formInput"
                  type="email"
                  placeholder="Username Or Email"
                />
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Control
                  onBlur={handleChange}
                  name="password"
                  className="formInput"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              {!newUser && (
                <Form.Group className="forgot d-flex justify-content-between">
                  <Form.Check type="checkbox" label="Remember Me " />
                  <Link className="password">Forgot Password</Link>
                </Form.Group>
              )}
              <div className="d-flex justify-content-center">
                <input
                  className="logInBtn btn btn-primary"
                  variant="primary"
                  type="submit"
                  value="Log In"
                />
              </div>
            </Form>
            <div className="text-center mt-3 mb-3">
              <span>
                {newUser
                  ? "You already have an account?"
                  : "Don’t have an account?"}
                <Link
                  className="ml-1"
                  to="/login"
                  onClick={() => setNewUser(!newUser)}
                >
                  {newUser ? "Log In" : "create new account"}
                </Link>
              </span>
            </div>

            <div className="formSocial">
              <div className="d-flex justify-content-center">
                <h6>OR</h6>
              </div>
              <div className="fbToGoogle d-flex justify-content-center">
                <button className="google btn btn-primary" onClick={handleFb}>
                  Continue with Facebook
                </button>

                <button
                  className="facebook btn btn-primary ml-4"
                  onClick={googleSignIn}
                >
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="App">
    //   <h1> please sign in you account</h1>

    //   {user.isSignIn ? (
    //     <button onClick={googleSignOut}> Sign out </button>
    //   ) : (
    //     <button onClick={googleSignIn}> Sign In </button>
    //   )}
    //   <button onClick={handleFb}>fb Log in</button>

    //   {user.isSignIn && (
    //     <div>
    //       <h1>welcome to {user.name}</h1>
    //       <h1>Email : {user.email}</h1>
    //       <img src={user.photo} alt="" />
    //     </div>
    //   )}
    //   <p>Name : {user.name}</p>
    //   <p>email : {user.email}</p>
    //   <p>password : {user.password}</p>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type="checkbox"
    //       name="newUser"
    //       onChange={() => setNewUser(!newUser)}
    //       id=""
    //     />
    //     <label htmlFor="newUser">New User Sign Up </label> <br />
    //     {newUser && (
    //       <input
    //         type="text"
    //         name="name"
    //         onBlur={handleChange}
    //         placeholder="Enter You name "
    //         required
    //       />
    //     )}{" "}
    //     <br />
    //     <input
    //       type="text"
    //       name="email"
    //       onBlur={handleChange}
    //       placeholder="Enter Your Email"
    //       required
    //     />{" "}
    //     <br />
    //     <input
    //       type="password"
    //       name="password"
    //       onBlur={handleChange}
    //       id=""
    //       placeholder="Enter Your Email"
    //       required
    //     />{" "}
    //     <br />
    //     <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
    //   </form>
    //   <p style={{ color: "red" }}>{user.error}</p>
    //   {user.success && (
    //     <p style={{ color: "green" }}>
    //       User {newUser ? "Create" : "Logged In"} successFull
    //     </p>
    //   )}
    // </div>
  );
}

export default Login;
