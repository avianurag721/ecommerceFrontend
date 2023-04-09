import React from 'react'
import { useSelector } from 'react-redux'
import CartItemD from './CartItemD'

const CartItem = () => {

  const { cart } = useSelector((cart) => cart)
  
  return (
    <div className='flex flex-col gap-1 p-0  lg:p-8 lg:gap-4  rounded-md w-[100%] lg:w-[60%]'>
      {
        cart.map((item)=><CartItemD key={item.id} item={item} />)
      }
      
    </div>
  )
}

export default CartItem
