import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ProductsList from './ProductsList';
import Product from './Product';

function FiterItems() {

    const [filteritems,setfliteritems]=useState([])
    const handleSearch = async () => {
        
        const queryParams = new URLSearchParams(window.location.search)
        const { data } = await axios.post('http://localhost:3004/api/products/filter', {
          'category': queryParams.get('category'),
          'limit': queryParams.get('limit')
        })
        setfliteritems(data)
      
      };
useEffect(()=>{
    handleSearch()
},[filteritems])
  return (
   <>
  <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            filteritems.map((e,i)=>{
              return <Product data={e} key={i} />
            })
          }
        </div>
      </div>
    </div>
   </>
  )
}

export default FiterItems