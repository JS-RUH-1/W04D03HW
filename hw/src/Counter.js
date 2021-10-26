import React, { useState } from 'react';

function Counter() {
   
    const [user, setUser] = useState()
    let [count,setCount] = useState(0);
    
    
    let plus = ()=>{
        console.log(count)
        setCount(count+1)
    
    }
    let minusCounter =()=>{
        
        setCount(count-1)
    
    }
    return(
    <div>
    <button  onClick={plus}>Increase</button>
    <h4>{count}</h4>
    <button onClick={minusCounter}>Decrease</button>  
    </div>
    )}
export default Counter;