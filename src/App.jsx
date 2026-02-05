import React from 'react'
import Navbar from './components/Navbar'

let x="ujjwal";
let array =["user1", "user2", "user3", "user4", "user5"];

let data = "boy";

const App = () => {
  let x=0;

  const btnClick= () =>{
    console.log("clicked");
    x++;
    console.log(x);
  }
  return (
    <div>
    <Navbar/>
    {x}
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