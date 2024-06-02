
import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProject from '../Components/CartProject'

import { totalItem,totalPrice } from '../Features/CartReducer'
const Cart = () => {
  const {cart} =useContext(CartContext)
  return (
    <div className="contaier mt-2">
      <div className="row">
        <div className="col-8">
          {
            cart.map(p=>(
              <CartProject key={p.id} product={p}></CartProject>
            ))
          }
      </div>
      <div className='col-4'>
          <div className="bg-secondary p-2 text-white">
            <h5>Total Items:{totalItem(cart)}</h5>
            <h5>Total Price:${totalPrice(cart)}</h5>
            <button className='btn btn-success'>Checkout</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
