// use-Effact --- side by side multiple chizo ko chalane ka kaam karti hee.

// import React, { useEffect, useState } from 'react'

// const App = () => {


//   const [a, setA] = useState(0)
//   const [b, setB] = useState(0)

// function aChanging() {
//   console.log('value a is running...');
// }

// function bChanging() {
//   console.log('value b is running...');
// }


// useEffect(function(){
//   console.log('use effect is running ....');
// },[b])


//   return (
//     <div>
//       <h1>Value A is {a}</h1>
//       <h1>Value B is {b}</h1>

//       <button onClick={()=>{
//         setA(a + 1)
//       }}>Change A</button>

//       <button onClick={()=>{
//         setB(b - 1)
//       }}>Change B</button>
//       </div>
//   )
// }

// export default App



import React, {useEffect, useState} from 'react'

const App = () => {


  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

function aChanging (){
  console.log('a is change');
  
}

function bChanging () {
  console.log('b is change'); 
}

useEffect(function (){
  console.log('use effect is running....');
  
},[a])

  return (
    <div>
      <h1>Value of a is {a}</h1>
      <h1>Value of b is {b}</h1>

      <button onClick={()=>{
        setA(a + 1)
      }}>Change A</button>
      <button onClick={()=>{
        setB(b - 1)
      }}>Change B</button>

    </div>
  )
}

export default App