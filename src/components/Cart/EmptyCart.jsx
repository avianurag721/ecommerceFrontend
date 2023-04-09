import React from 'react'
import cartempty from './th.jpg'
import { NavLink } from 'react-router-dom'
const EmptyCart = () => {
  return (
      <div className='flex flex-col justify-center items-center'>
          <img src={cartempty} alt="empty cart" />
          <h1> <strong> Kuch to Kharid lo</strong></h1>
          <NavLink to='/' > <button className='btn bg-red-600  p-1 mt-5 rounded-md px-2 '>Buy now</button> </NavLink>
      
    </div>
  )
}

export default EmptyCart
