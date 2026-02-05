import React, { useState } from 'react'
import Navbar from './components/Navbar'

let x="ujjwal";
let array =["user1", "user2", "user3", "user4", "user5"];

let data = "boy";

const App = () => {
  // react only show changes when state changes
  const [x, setx] =useState(0);

  const btnClick= () =>{
    console.log("clicked");
    setx(x+1);
    console.log(x);
  }
  return (
    <div>
    <Navbar/>
   
    {/* display things */}
    {x}
    {/* map function using */}
    {array.map((user)=>{return <h2>{user}</h2>})}
    {/* conditional rendering */}
    {data === "boy"?<h1>Boy</h1>: <h1>Girl</h1>}
    {/* event handling */}
    <button onClick={()=>{btnClick()}}>Click Me</button>
    
   
    </div>
  )
}

export default App