import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('Button Was click');
    

  function inputChanging(){
    console.log('User is Typing...');
    
  }
  
  return (


    <div>


      {/* <h1>Hello Guys</h1> */}
      {/* <button onClick={btnClicked }>Click Here</button> */}
 
 {/* normal function */}
      <button onClick={function(){
        console.log('Hello Guys');
      }}>Click Here</button>

{/* Arrow function */}
<button onClick={()=>{
  console.log('Hello Dear');
}}>Click here</button>

<input onChange={inputChanging} type="text" placeholder='Enter your name' />

<input onChange={function(elem){
  console.log(elem);
  }}
   type="text" placeholder='Enter your name' />

   <input onChange={function(elem){
  console.log(elem.target);
  }}
   type="text" placeholder='Enter your name' />

   <input onChange={function(elem){
  console.log(elem.target.value);
  }}
   type="text" placeholder='Enter your name' />


    </div>

    
  )
}

export default App