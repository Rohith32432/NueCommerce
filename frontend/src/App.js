import React from 'react'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import Login from './Auth/Login'
import Product from './components/Product'
import Cart from './components/Cart'
import ProductsList from './components/ProductsList'
import Profile from './components/Profile'
import UserContext from './Context/UserContext'
import Requried from './Context/Requried'
import Home from './components/Home'
import IndividualProduct from './components/IndividualProduct'
import Filter from './components/Filter'
import FiterItems from './components/FiterItems'
import Orders from './components/Orders'
function App() {
  return (
   <>
   {/* <Product/>
   <Cart/>
   <ProductsList/>
   
   <Profile/> */}
    <UserContext>
   <NavBar/>
      {/* <Home/> */}
   <Routes> 
    {/* <Route path='/reg' element={<Re/>}/> */}
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route element={<Requried/>}>
    <Route path='/Profile' element={<Profile/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/filter' element={<FiterItems/>}/>
    <Route path='/product/:id' element={<IndividualProduct/>}/>
    <Route path='/order' element={<Orders/>}/>
    </Route>
    <Route path='*' element={        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">404 Not Found</h2>    }/>
   </Routes>
    </UserContext>
   </>

  )
}

export default App