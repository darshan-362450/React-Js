import React from 'react'

import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
        <Card company='Amazon'/>
        <Card company='TCS'/>
        <Card company='Flipkart' />
    </div>
  )
}

export default App

