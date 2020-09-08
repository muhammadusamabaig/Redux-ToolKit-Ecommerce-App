import React, { useState, useEffect } from 'react';
import bin from './assets/binimage.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { LoadAddToCartData,CartTotalIncrement,CartTotalDecrement,gtotal,LoadCartTotal,DeleteToCart } from './BookSlice';
export default function AddToCart() {
  const stateLoadAddToCart = useSelector(LoadAddToCartData);
  const gtotalsate = useSelector(gtotal);
  // let gtotal

  const dispatch = useDispatch();
  // console.log(stateLoadAddToCart)
  dispatch(LoadCartTotal())

if(stateLoadAddToCart.length!=0){



  return (
    <div className="container">
       <div className="row d-md-block d-none" style={{marginTop:"1%"}}>
                 <div style={{display:"inline-block "}}  className="col-2 text-center" >ITEM</div>
                 <div style={{display:"inline-block"}} className="col-2" >TITLE</div>
                 <div style={{display:"inline-block"}} className="col-2" >REMOVE ITEM</div>
                 <div style={{display:"inline-block"}} className="col-2" >PRICE</div>
                 <div style={{display:"inline-block"}} className="col-2" >QUANTITY</div>
                 <div style={{display:"inline-block"}} className="col-2" >TOTAL</div>


                </div>


  
     
      {
        stateLoadAddToCart.map((item) => {
          
          return (
            
            <div >
               
               <div className="row d-md-block d-none text-center" style={{marginTop:"2%"}}>
                 <div style={{display:"inline-block"}} className="col-2" ><img style={{width:"70%"}} src={item.imagepath}/></div>
          <div style={{display:"inline-block"}} className="col-2" >{item.titl}</div>
          <div style={{display:"inline-block"}} className="col-2" ><img style={{width:"20%"}} onClick={()=>{dispatch(DeleteToCart(item.id))}} src={bin}/></div>

          <div style={{display:"inline-block"}} className="col-2" >{item.price}</div>
          <div style={{display:"inline-block"}} className="col-2" ><span className="col-1" style={{border:"2px solid",width:"10%"}} onClick={()=>{dispatch(CartTotalIncrement(item.id))}}>+</span>{item.quantity}<span className="col-1" style={{border:"2px solid",width:"10%"}} onClick={()=>{dispatch(CartTotalDecrement(item.id))}}>-</span></div>

          <div style={{display:"inline-block"}} className="col-2" >{item.total}</div>


                </div>


                 
                {/* after mide point screen */}
                <div className="row d-xl-none d-lg-none d-md-none" >
                  <div className="col-sm-12" >
                    <img style={{ height: "180px" }} src={item.imagepath} />
                  </div>
                  <div className="col-12">
                    <img style={{ height: "50px" }} onClick={()=>{dispatch(DeleteToCart(item.id))}} src={bin} />
                  </div>
                  <div className="col-sm-12 ">
                    <span className="col-6" style={{ height: "180px",textAlign:"center",border:"2px solid", overflow: "hidden" }} onClick={()=>{dispatch(CartTotalIncrement(item.id))}}>+</span>
                    <span className="col-6" style={{ height: "180px",marginBottom:"3%",textAlign:"center",border:"2px solid", overflow: "hidden" }} onClick={()=>{dispatch(CartTotalDecrement(item.id))}}>-</span>
                  </div>
          <span  className=" col-sm-12 col-xl-3 col-lg-3 col-md-3" style={{ textAlign:"right" }} >{item.total}</span>

                </div>
              </div>
          )
        })
      }
          <div className="row justify-content-end" style={{backgroundColor:"#3492eb",color:"white",fontWeight:"bold",paddingRight:"6%",border:"2px solid",fontSize:"180%"}}><span>Grand Total :{gtotalsate}</span></div>

    </div>
  );

}
else{
  return(
  <h1 style={{color:"#3492eb"}}>YOURE CART IS EMPTY</h1>
  )
}


}
