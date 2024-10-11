import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAuth } from './UserContext'

function Requried() {
  const {token,user}=useAuth()
  return (
    <>
    
    {
      token? <Outlet/> :
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
       Please Login
       </h2>

    }
    
    </>


  )
}

export default Requried