import React, { useState, useEffect } from 'react';
const [temp,settemp]=useState([])

 export const Service=()=>{
  
  

        fetch('/api/users')
  .then(response => response.json())
  .then(data => settemp(data));
return temp
}

 