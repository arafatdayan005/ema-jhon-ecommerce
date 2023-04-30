import React, { useContext } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'

function Signup() {
  const {createUser} = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    
    createUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  return (
    <>
      <div className='signup-container'>
        <h2 className='title'>Sign Up</h2>
        <div className="form-control">
          <form onSubmit={handleSignUp}>
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password" required />

            <label htmlFor="psw"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm Password" name="confirm" required />
            <button className='signup-btn' type="submit">Sign Up</button>
          </form>
          <p><small>Already have an account? <Link to="/login"> <span className="text-login">Login</span></Link></small></p>
        </div>
      </div>
    </>
  )
}

export default Signup