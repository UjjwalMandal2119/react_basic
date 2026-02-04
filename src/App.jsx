import React from 'react'
import Navbar from './components/Navbar'

let x="ujjwal";
let array =["user1", "user2", "user3", "user4", "user5"];

let data = "boy";

const App = () => {
  return (
    <div>
    <Navbar/>
    {/* display things */}
    {x}
    {/* map function using */}
    {array.map((user)=>{return <h2>{user}</h2>})}
    {/* conditional rendering */}
    {data === "boy"?<h1>Boy</h1>: <h1>Girl</h1>}
    
   
    </div>
  )
}

export default App