import React, { use } from 'react'

// const FirstComponent = (props) => {
//   return (
//     <div>
//     {props.data}
    
//     </div>
//   )
// }

// export default FirstComponent

// we can also use destructuring in the props parameter
const FirstComponent = ({data,fn}) => {
  return (
    <div>
    <button onClick={()=>{fn(10)}}>Set 10</button>
    {data}
    
    
    </div>
  )
}

export default FirstComponent