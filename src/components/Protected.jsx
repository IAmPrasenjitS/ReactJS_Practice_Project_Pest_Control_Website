import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Protected({isLoggedIn, children}) {
    const navigation = useNavigate()
  if(isLoggedIn){
    return children
  }
  if(!isLoggedIn){
    alert("Please Login First")
    return <Navigate to="/login" replace />
  }
}
