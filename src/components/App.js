
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    
        <div className="parent " style={{backgroundColor : "lightgreen", margin: "10px", padding: " 10px"}}>
          <h2>Parent Component</h2>
          <p>{inputValue}</p>
          <Child setInputvlv = {setInputValue}/>
        </div>
    
  )
}

export default App
