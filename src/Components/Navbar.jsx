

import React, { useContext } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { CartContext } from '../Features/ContextProvider'

//outlet ,loader

const Navbar = () => {

  const {cart} =useContext(CartContext) 
  return (
    <div className='d-flex justify-content-between bg-secondary py-4 px-5 text-white '>
        <Link to="/" className='navbar-brand fs-4 fw-bolder'>Shop</Link>
        <Link to="/cart" className='text-white fs-4 fw-bolder'> <FaCartShopping/> {cart.length}</Link>
      
    </div>
  )
}

export default Navbar
