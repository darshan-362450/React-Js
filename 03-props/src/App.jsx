import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
 <Card user='Pranav More' age={21} img="https://tse4.mm.bing.net/th/id/OIP._1FWgrbJed6xVHD855A4zgHaEx?pid=Api&P=0&h=180"/>
  <Card user='Darshan Hadawale' age={21} img="https://i.pinimg.com/736x/9b/d1/ff/9bd1ffa4fbd3555032195958503f8d8a.jpg"/>
   <Card user='Ketan Rasal' age={22} img="https://im.rediff.com/news/2013/jul/14lead18.jpg"/>
   < Card user="Shravan Rajak" age={23} img="https://tse1.mm.bing.net/th/id/OIP.K5L6v_vLHKoxftWqur2kRQHaHk?pid=Api&P=0&h=180"/>
    </div>
    
  )
}

export default App



