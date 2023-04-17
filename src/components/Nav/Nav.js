import React from 'react'
import Logo from '../../images/Logo.svg'
import './nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <img src={Logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Nav