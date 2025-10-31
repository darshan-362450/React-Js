// import React, { useState } from 'react'

// const App = () => {

//   const [a, setA] = useState(10);
// console.log(a);

// function changeValue(){
//   setA(7);
// }

//   return (
//     <div>
//       <h1>The Value of a is {a}</h1>
//       <button onClick={changeValue}>Click Here</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {

//   const [number, setNumber] = useState(0);

//   function IncreaseValue(){
//     console.log('The value is Incrasing....');
//     setNumber(number+1);
//   }

//   function DecreaseValue(){
//     console.log('The Value is Decreasing....');
//     setNumber(number-1);
//   }

// function HighJump(){
//   console.log('High Jumping');
  
//   setNumber(number+5);
// }

// function LessJump(){
//   console.log('Less Jumping');
  
//   setNumber(number-5);
// }

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={IncreaseValue}>Increase</button>
//       <button onClick={DecreaseValue}>Decrease</button>
//       <br></br>
//       <button onClick={HighJump}>Increase by 5</button>
//       <button onClick={LessJump}>Decrease by 5</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [number, setNumber] = useState(0);

  function IncreaseNum(){
    console.log('The value is Increasing ....');
    setNumber(number+1);
  }

const DecreaseNum = () => {
  console.log('The value is Decreasing ....');
  setNumber(number-1);
}

function Plus5 () {
  console.log('The value is +5 increament ....');
  setNumber(number+5);
}

const Minus5 = () => {
  console.log('The is is -5 decreament ....');
  setNumber(number-5);
}

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}>Decrease</button>
      <br/>
      <button onClick={Plus5}>+5</button>
      <button onClick={Minus5}>-5</button>
    
      </div>
  )
}

export default App