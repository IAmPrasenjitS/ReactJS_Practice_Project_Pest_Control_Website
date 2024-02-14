import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function LoggedIn({setIsLoggedIn}) {
    const navigation = useNavigate()
    const logoutFunction = () => {
        localStorage.removeItem('tokenId')
        setIsLoggedIn(false)
        navigation('/login')
    }
  return (
    <div>
        <h2>You are LoggedIn</h2>
        {/* <Link className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown" to="/login">Logout</Link> */}
        <button className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown" onClick={logoutFunction}>Logout</button>
    </div>
  )
}
