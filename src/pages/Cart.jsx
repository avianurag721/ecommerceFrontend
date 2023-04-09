import React from 'react'
import { useSelector } from 'react-redux'
import Fullcart from '../components/Cart/Fullcart'
import EmptyCart from '../components/Cart/EmptyCart'


  
const Cart = () => {
  const { cart } = useSelector((state) => state)

  return (
    <div className='  min-h-[100vh]  py-10' >
      {
        cart.length>0?<Fullcart/>:<EmptyCart/>
      }
    </div>
  )
}

export default Cart
