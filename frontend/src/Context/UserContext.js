import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const context=createContext(null)
function UserContext({children}) {
    const [user,setuser]=useState({}) 
    const {pathname}=useLocation()

    // console.log(pathname);
    const [token,settoken]=useState(localStorage.getItem('token'))
     const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function getuser(){
       const {data}=await axios.get('http://localhost:3004/api/user/profile',config)
       setuser(data)
       
        
    }
    useEffect(()=>{
        settoken(localStorage.getItem('token')) 
        if(token) { getuser()}
    },[pathname])
  return (
    <context.Provider value={{user,setuser,token}} >
        {children}
    </context.Provider>
  )
}

export const useAuth=()=>{
    return useContext(context)
}
export default UserContext