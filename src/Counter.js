import { useState } from "react";

function Counter(){

  var [count,setCount] = useState(0)

  function increment(){
    setCount(count+1)
  }

  function decrement(){
    setCount(count-1)
  }



  return(
    <div className="style1">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button className="but" onClick={increment}>+</button>
      <button className="but" onClick={decrement}>-</button>
    </div>
  )
}

 export default Counter