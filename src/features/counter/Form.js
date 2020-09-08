import React, { useState, useEffect } from 'react';
import './table.css'
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  LoadData,
  incrementByAmount,
  DetailData,
  // incrementAsync,
  Selectdata,
} from './BookSlice';

export default function Form() {
const [one,setone]=useState("")
const [two,settwo]=useState("")

//   const count = useSelector(Selectdata);
//   const dispatch = useDispatch();
//   dispatch(LoadData())

// console.log(count)

function addData() {
    fetch('api/add',{
       method:"POST",
       body:JSON.stringify({one:one,two:two}) 
    }).then(res=>res.json()).then((data)=>console.log(data,"data send"))
}
  return (

    <div>
    <div className="tabledesign container">
      <input onChange={(e)=>{setone(e.target.value)}} type="text"/>
      <input onChange={(e)=>{settwo(e.target.value)}} type="text"/>
      <input type="button" onClick={()=>{addData()}}/>

    </div>
    </div>
  );
}
