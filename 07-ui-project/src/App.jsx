import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

const users = [
{
  img: 'https://images.unsplash.com/photo-1632242219467-6f11872361f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  intro: '',
  tag: 'Satisfied'
},

{
  img: 'https://images.unsplash.com/photo-1639290756529-a746694d538f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  intro: '',
  tag: 'Underserved'
},

{
  img: 'https://images.unsplash.com/photo-1676657794179-e8c65fa49c71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  intro: '',
  tag: 'Underbanked'
}


]


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>

    </div>
  )
}

export default App