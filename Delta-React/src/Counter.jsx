import { useState } from "react";
function Counter() 
{ 
    let [count,setCount]=useState(0);
  
  function inCount(){ 
    setCount(count+1); 
    console.log(count);
  } 
  return( 
    <div>
      
      <p>Count:{count}</p>
      <button onClick={inCount}>Increase Count</button>
    </div>

  )
   
}

export default Counter;