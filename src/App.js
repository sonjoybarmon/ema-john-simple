import React, { createContext } from 'react';
import './App.css';
import Header from './comporents/Header/Header';
import Shop from './comporents/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './comporents/Review/Review';
import Manege from './comporents/Manege/Manege';
import NotFound from './comporents/NotFound/NotFound';
import ProductInfo from './comporents/ProductInfo/ProductInfo';
import Login from './comporents/Login/Login';
import Shipment from './comporents/Shipment/Shipment';
import { useState } from 'react';
import PrivateRoute from './comporents/PrivateRoute/PrivateRoute';

export const userContext = createContext();

function App(props) {
    const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser , setLoggedInUser]}>
        <h3>email : {loggedInUser.email}</h3>
    
    <Router>
        <Header></Header>
        <Switch>
            <Route path='/shop'>
                <Shop></Shop>
            </Route>
            <Route path='/reviwe'>
                <Review> </Review>
            </Route>
            <Route path='/manage'>
                <Manege></Manege>
            </Route>
            <Route path='/login'>
                <Login></Login>
            </Route>
            <PrivateRoute path='/shipment'>
                <Shipment></Shipment>
            </PrivateRoute>
            <Route path='/:productKey'>
                <ProductInfo></ProductInfo>
            </Route>
            <Route exact path='/'>
                <Shop></Shop>
            </Route>
            <Route path= '*'>
                <NotFound> </NotFound>
            </Route>
        </Switch>
    </Router>
    
    </userContext.Provider>
  );
}

export default App;
