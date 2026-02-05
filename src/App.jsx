import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import FirstComponent from './components/FirstComponent';

let x="ujjwal";
let array =["user1", "user2", "user3", "user4", "user5"];

let data = "boy";

const App = () => {
  const inputRef =useRef(null)
  // react only show changes when state changes for this we use useState
  const [x, setx] =useState(0);

  const btnClick= () =>{
    console.log("clicked");
    setx(x+1);
    console.log(x);
  }
  return (
    <div>
    <Navbar/>
    {/* how to pass the data from one components to another components */}
    {/* how we can pass a function using props */}
    <FirstComponent data={x} fn={setx}/>
   
    {/* display things */}
    {x}
    {/* map function using */}
    {array.map((user)=>{return <h2>{user}</h2>})}
    {/* conditional rendering */}
    {data === "boy"?<h1>Boy</h1>: <h1>Girl</h1>}
    {/* event handling */}
    <button onClick={()=>{btnClick()}}>Click Me</button>

 {/* we used useRef for get the reference of any elements */}

    <input ref={inputRef} type='text'></input>
    <button onClick={()=>{console.log(inputRef.current.value);}}>Submit</button>
    <button onClick={()=>{console.log(inputRef);}}>Submit1</button>
   
    </div>
  )
}

export default App