


import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
// import {Detail} from './data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './table.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  ViewDetail,
  // AddToCart,
  AddToCartFromDetail
} from './BookSlice';

export default function Detail() {

  const stateViewDetail = useSelector( ViewDetail);
  const dispatch = useDispatch();
  console.log(stateViewDetail.AddCartCondition,"kllokkkkkkkkkkkk")

  
  return (
<div className="container"style={{paddingTop:"5%"}}>
<div className="row" style={{paddingBottom:"3%"}}>

 <div  className="col-lg-3 col-xl-3" >
<img className=" justify-content-md-start" style={{marginTop:"15%",boxShadow: "3px 10px 7px #9E9E9E"}} src={stateViewDetail.imagepath}/>
</div>
<div className="col-lg-9 col-xl-9 " style={{borderLeft:"2px solid darkGray"}}>
  <div className="d-flex justify-content-between">
 <span style={{fontWeight:"bold",textAlign:"left"}} >
   Authore : {stateViewDetail.author}
   <br/>
   Published : {stateViewDetail.published}
 </span>
 <span  >
  Research Link : <a href={stateViewDetail.website}>View Details</a>
   <br/>
 </span>
</div>
<div >
  
  <span className="d-flex justify-content-start" style={{textAlign:"left",letterSpacing:"1px",fontWeight:"bold",marginTop:"2%"}}>Description : <br/> {stateViewDetail.description}</span>
  <br/>
  <div className="d-flex justify-content-start" style={{color:"#3492eb",fontWeight:"bold",fontSize:"150%"}}>
  <span  >Price :</span><span  >{stateViewDetail.price}Rs</span>
  </div>
</div>

<div className="d-flex justify-content-start">
  
<Link size="sm"  style={{letterSpacing:"1px",marginTop:"2%",marginLeft:"2%",backgroundColor:"#3492eb",width:"20%",textAlign:"center",color:"white",textDecoration:"none"}} variant="warning" to='/'>BACK TO STORE</Link>
  {/* <button onClick={()=>{alert("jdiejdijdi")}} disabled={stateViewDetail.AddCartCondition}  style={{letterSpacing:"1px",fontWeight:"bold",marginTop:"2%",marginLeft:"2%",backgroundColor:"#eba415",width:"20%",textAlign:"center"}}>Add To Cart</button> */}
  <Button size="sm" onClick={()=>{dispatch(AddToCartFromDetail(stateViewDetail.id))}} disabled={stateViewDetail.AddCartCondition} style={{letterSpacing:"1px",marginTop:"2%",marginLeft:"2%",backgroundColor:"#3492eb",color:"white",width:"20%",textAlign:"center"}} variant="warning">ADD TO CART</Button>
</div>

 </div>
</div>

    
    </div>
  );
}
