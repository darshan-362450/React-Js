import React from 'react'
import { useNavigate } from "react-router-dom";
const Navigate = () => {

 const navigate = useNavigate();

   // const navigatepage = () => {
  //   navigate('/')
  //   console.log('Button Was clicked');

  // }

  return (
    <div className='bg-sky-500/80'>
        <button
        onClick={() => {
          navigate('/')
        }}
        className="bg-orange-500 py-4 px-10 rounded-2xl active:scale-95 m-5"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
         navigate(-1)
        }}
        className="bg-stone-950 py-4 px-10 rounded-2xl active:scale-95 m-5"
      >
        Return to Back Page
      </button>
      <button
        onClick={() => {
         navigate(+1)
        }}
        className="bg-green-900 py-4 px-10 rounded-2xl active:scale-95 m-5"
      >
        Go to Next Page
      </button>
    </div>
  )
}

export default Navigate