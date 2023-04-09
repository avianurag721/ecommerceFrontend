import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

const Fullcart = () => {
  return (
    <div className='flex gap-4 flex-col lg:flex-row w-[80%] mx-auto justify-around items-center'>
          <CartItem />
          <CartTotal/>
    </div>
  )
}

export default Fullcart
