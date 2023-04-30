import React, { useContext } from 'react'
import Logo from '../../images/Logo.svg'
import './nav.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

function Nav() {

  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className='nav'>
      <img src={Logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
      <div>
        {
          user &&
          <div className='user'>
            <div className='welcome-mail'>
              <span>
                <b>
                  Welcome
                </b>
              </span>
              <span>
                {user.email}
              </span>
            </div>
            <button className='btn-LogOut' onClick={handleLogOut}>Log Out</button>
          </div>
        }
      </div>

    </div>
  )
}

export default Nav