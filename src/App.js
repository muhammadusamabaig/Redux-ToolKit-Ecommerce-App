import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import server from './features/counter/Mirageserver'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBasket,faStore } from '@fortawesome/free-solid-svg-icons'

import BookDetail from './features/counter/BookDetail'
// import AddTocart from './features/counter/Cart'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Detail} from './features/counter/BookDetail'
import AddToCart from './features/counter/Cart';
server();
function App() {
  
  return (
    <div className="App">
       {/* <Form/>
        <Counter /> */}
         <Router>
           <div className="container">
          
             <div style={{backgroundColor:"#3492eb",color:"white",fontSize:"170%"}} className="row justify-content-between" >
             {/* <span style={{paddingLeft:"3%"}}><FontAwesomeIcon icon={faStore} /></span> */}
             <Link to="/" style={{paddingLeft:"3%",color:"white"}}>   <span ><FontAwesomeIcon icon={faStore} /></span></Link>

             <span className="d-md-block d-none" style={{paddingRight:"3%",fontStyle:"italic",fontWeight:"bold",fontSize:"150%"}}>Book Store</span>


             <Link to="/Cart" style={{paddingRight:"3%",color:"white"}}>   <span ><FontAwesomeIcon icon={faShoppingBasket} /></span></Link>

             </div>

         <Switch>
          <Route exact path="/">
            <Counter />
          </Route>
          <Route exact path="/Detail">
            <BookDetail />
          </Route>
          <Route exact path="/Cart">
            <AddToCart />
          </Route>
        </Switch>
      </div>
    </Router>
        
    </div>
  );
}

export default App;
