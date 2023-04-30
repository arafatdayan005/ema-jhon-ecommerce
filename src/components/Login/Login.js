import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider'


function Login() {
    const [show, setShow] = useState(false)

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <>
            <div className='login-container'>
                <h2 className='title'>Login</h2>
                <div className="form-control">
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type={show ? "text" : "password"} placeholder="Enter Password" name="password" required />
                        <p className='show-pass' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>
                        <button className='login-btn' type="submit">Login</button>
                    </form>

                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <p><small>Don't have an account? <Link to="/signup"> <span className="text-signup">Signup</span></Link></small></p>
                </div>
            </div>
        </>
    )
}

export default Login