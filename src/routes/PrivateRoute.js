import React, { useContext } from 'react'
import { AuthContext } from '../components/Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation();


    if (loader) {
        return <div>Loading...</div>
    }

    if (user) {
        return children
    }
    else {
        return <Navigate to="/login" state={{from: location}} ></Navigate>
    }

    return (
        <div>

        </div>
    )
}

export default PrivateRoute