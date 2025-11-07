//API ko call karne ke 2 tarike hote hee 1) Fetch 2) Axios
//Fetch inbuild hoi he ( javascript ke ander rehti hee already)
//Axios ye third party hoti hee

import React from 'react'
import axios from 'axios'

const App = () => {


  //normal function
  // async function getdata () {

  //   const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
    
  // }


  //Arrow Function
//FETCH METHOD
  //  const getdata = async () => {

  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   const data = await response.json()

  //   console.log(data);
    
  //   console.log(response);
    
  // }

//AXIOS METHOD

const getData = async () => {
  
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

  console.log(response.data);

}



  return (
    <div>
      <h1>Data</h1>
        <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App