import React, { useState, useEffect } from 'react';
import './table.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  
  LoadData,
 AddToCart,
  DetailData,
  Loadbook_data,
  FetchFromServer
} from './BookSlice';
// import AddToCart from './Cart';
let a=2
export function Counter() {
  const dispatch = useDispatch();
if(a<=2){
  dispatch(FetchFromServer())

}
a++
  const StateLoadbook_data = useSelector(Loadbook_data);

  

  // console.log(StateLoadbook_data)



    

  const [isbn,setisbn]=useState("")
  const [title,settitle]=useState("")
  
  // function addData() {
    
  //   fetch('api/add',{
  //      method:"POST",
  //      body:JSON.stringify({isbn:isbn,title:title}) 
  //   }).then(res=>res.json()).then((data)=>{console.log(data,"data send")})


  // }






// console.log(count)
  return (
<div className="container">
    

    <div className="row" style={{}}>

{
  StateLoadbook_data.map((item)=>{
    console.log(item.AddCartCondition)
    return(
 <div key={item.id}  style={{boxShadow: "3px 10px 7px #9E9E9E",paddingBottom:"2%",marginTop:"2%"}} className=" col-lg-3 col-xl-3 col-sm-6 col-md-4">

<Link to="/Detail"><img onClick={()=>{dispatch(DetailData(item.id))}} src={item.imagepath} style={{paddingTop:"2%"}}/></Link>
  <span style={{fontFamily:"monospace",display:"block",marginTop:"2%"}}>{item.titl}</span>
 
  <button className="btn"  onClick={()=>{dispatch(AddToCart(item.id))}} disabled={item.AddCartCondition}  style={{width:"100%",backgroundColor:"#3492eb",color:"white"}}>Add To Cart</button>
</div>
    )

  })
}

    </div>
    
    

    </div>
  );
}
