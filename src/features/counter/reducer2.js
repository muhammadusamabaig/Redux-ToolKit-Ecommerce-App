// import Data from './data.json'
import { createSlice } from '@reduxjs/toolkit';
import {Detail} from './BookDetail'
import { useState, useEffect } from 'react';
// import {Service} from './ServiceProvider'

 const BookSlice2 = createSlice({
  name: 'cour',
  initialState: {
    book_data:[],
    bookDetail:Detail,
  },
  
  reducers: {

    LoadData:
     (state) => {
       const[load_data,setload_data]=useState([])
       useEffect(
    async  ()=>{
       const ftch=  fetch('/api/users')
       ftch.then(res=>res.json()).then((data)=>{
        setload_data(data)
          })
      }
      ,[] )
return{...state,book_data:load_data}
      
    

     }

,
    DetailData:(state,action)=>{
// const temp=state.book_data.filter(()=>{

// })
      console.log(action.payload)

    }
    // decrement: istate => {
    //   istate.value -= 1;
    // },
    // incrementByAmount: (istate, action) => {
    //   istate.value += action.payload;
    // },
    
  },
});





export const { LoadData, DetailData} = BookSlice2.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };
export const Selectdata = state => state.counter.book_data

export default BookSlice2.reducer;
