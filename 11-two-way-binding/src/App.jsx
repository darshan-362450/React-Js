// import React, { useState } from 'react'

// const App = () => {


// const [title, setTitle] = useState('')

//   const submitHandler = (a) => {

//     a.preventDefault(a);
//     console.log('Form-submitted by' , title);
    
//     setTitle('')
//   }

//   return (
//     <div onSubmit={(a)=> {
//       submitHandler(a)
//     }}>
//       <form action="submit" >
//         <input type="text" 
//         placeholder='Enter Your Name'
//         value={title}
//         onChange={(a)=>{
//          setTitle(a.target.value);
          
//         }}
//         />
//         <button>SUbmit</button>
//       </form>
//     </div>
//   )
// }

// export default App


// 



// import React, { useState } from 'react'

// const App = () => {


// const [title, setTitle] = useState('')

// const submitHandler = (a) => {

//   a.preventDefault();
//   console.log('form-submitted by ', title);
//   setTitle('');
// }

//   return (
//     <div>
//       <h1>Two-way-binding</h1>
//       <form action="" onSubmit={(a) => {
//         submitHandler(a);
//       }}>
//         <input type="text" 
//         placeholder='Enter your name'

//         value={title}
//         onChange={(a) => {
//           setTitle(a.target.value);
  
//         }}
//         />
//         <button>Submit/Click HEre</button>
//       </form>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {

const [title, setTitle] = useState('')


const submitHandler = (a) => {

  a.preventDefault()
  console.log('form submitted by', title);
  
  setTitle('')
}


  return (
    <div>
      <h1>Two Way Binding</h1>
      <form action="" onSubmit={(a) => {
        submitHandler(a)
      }}>
        <input type="text" placeholder='enter name'
        value={title}
        onChange={(a) => {
          setTitle(a.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App