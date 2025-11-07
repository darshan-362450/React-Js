import React, { useEffect, useState } from 'react'
import axios from 'Axios';

const App = () => {
   
const [userData, setUserData] = useState([]);

  const getData = async () => {
    // console.log('Data aa gya');


    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')

    console.log(response.data);
    
    setUserData(response.data)
  }

 useEffect(function(){
  getData()
 },[])

  let printUserData = 'No User Avaialble'
    
     if (userData.length>0){
      printUserData = userData.map(function(elem,idx){

        return  <div key={idx}>
          <a href={elem.url} target='_blank '>
        <div className='h-40 w-44 bg-white rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt=''/>
              <h2 className='font-bold text-lg'>{elem.author}</h2>
        </div>
     </a>
        </div>
      
      })
     } 

  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button 
         onClick={getdata}
      className='bg-green-600  px-5 py-2 text-white rounded active:scale-95'>Get Data</button> */}

     <div className='flex flex-wrap gap-4 ' >
      {printUserData}
     </div>

    </div>
  )
}

export default App