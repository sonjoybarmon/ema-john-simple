import React, { createContext, lazy } from "react";
import "./App.css";
import Header from "./comporents/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./comporents/NotFound/NotFound";
import Login from "./comporents/Login/Login";
import { useState } from "react";
import PrivateRoute from "./comporents/PrivateRoute/PrivateRoute";

const Shop = lazy(() => import("./comporents/Shop/Shop"));
const Review = lazy(() => import("./comporents/Review/Review"));
const Manege = lazy(() => import("./comporents/Manege/Manege"));
const ProductInfo = lazy(() => import("./comporents/ProductInfo/ProductInfo"));
const Shipment = lazy(() => import("./comporents/Shipment/Shipment"));

export const userContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/reviwe">
            <Review> </Review>
          </Route>
          <Route path="/manage">
            <Manege></Manege>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/:productKey">
            <ProductInfo></ProductInfo>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="*">
            <NotFound> </NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
