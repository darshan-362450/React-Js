import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-4 bg-cyan-800'>
        <h2 className='text-xl font-bold'>MSDians</h2>
        <div className='flex gap-8'>
<Link className='text-xl font-bold' to='/'>Home</Link>
<Link className='text-xl font-bold' to='/about'>About</Link>
<Link className='text-xl font-bold' to='/contact'>Contact</Link>

<Link className='text-xl font-bold' to='/courses'>Courses</Link>

            {/* <a className='text-xl font-bold' href="/">Home</a>
            <a className='text-xl font-bold' href="/about">About</a>
            <a className='text-xl font-bold' href="/contact">Contact</a> */}
        </div>
    </div>
  )
}

export default Navbar