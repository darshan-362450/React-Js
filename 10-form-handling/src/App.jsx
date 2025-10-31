// import React from 'react'

// const App = () => {

//   const submitHandler = () => {
//       alert('Submitted');
//       console.log('The form was submitted');
         
//   }

//   return (
//     <div>
//     <h1>Form-Handling</h1>
//     <form action="Submit" onSubmit={submitHandler}>
//     <input type="text" placeholder='Enter Your Name'/>
//     <button>Submit</button>
//     </form>
//       </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {




// const submitHandler = (a) => {
//   a.preventDefault();
//   console.log('form submitted');
  
 
// }

//   return (
//     <div>
//       <form onSubmit={(a)=> {
//         submitHandler(a)
//       }}>
//         <input type="text" placeholder='Enter your Name'/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

const submitHandler = (a) => {

a.preventDefault(a)
  console.log('form-submitted');
  
}

  return (
    <div>
      <h1>Form-Handling</h1>
      <form onSubmit={(a) => {
        submitHandler(a)
      }}>
      <input type="text" placeholder='Enter name' />
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App