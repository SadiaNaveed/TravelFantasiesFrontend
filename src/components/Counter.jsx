import React from  "react";

const Counter = ({handleIncrement,handleDecrement,count}) => {
  
    return  <div style={{ padding: "2rem" }}> 
    <button onClick = {handleDecrement}>--</button>
    {count} 
    <button onClick = {handleIncrement}>++</button>
    </div>;
}
 
export default Counter;