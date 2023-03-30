import React from 'react'
import Logo from '../images/Logo.svg'
import  './nav.css'

function Nav() {
  return (
    <div className='nav'>
        <img src={Logo} alt="" />
        <div>
            <a href="#">Order</a>
            <a href="#">Order Review</a>
            <a href="#">Manage Inventory</a>
            <a href="#">Login</a>
        </div>
    </div>
  )
}

export default Nav