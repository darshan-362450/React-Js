import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
 <Card user='Aman Singhaniya' age={18} img="https://unsplash.com/photos/person-illuminated-by-red-and-blue-light-tHT8AZy0mxhttps://tse3.mm.bing.net/th/id/OIP.szDUmCp7fD43v9cv6878SQHaEo?pid=Api&P=0&h=180"/>
  <Card user='DArshan Hadawale' age={21} img="https://i.pinimg.com/736x/9b/d1/ff/9bd1ffa4fbd3555032195958503f8d8a.jpg"/>
   <Card user='Ketan Rasal' age={22} img="https://images.unsplash.com/photo-1526666361175-e3595627c376?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168"/>
    </div>
    
    
  )
}

export default App



