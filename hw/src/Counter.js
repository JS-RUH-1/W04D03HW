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
    <div className="content">
    <button className="btn" onClick={plus}>Increase</button>
    <h4>{count}</h4>
    <button className="btn"  onClick={minusCounter}>Decrease</button>  
    </div>
    )}
export default Counter;