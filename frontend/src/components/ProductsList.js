import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';
import CallApis from '../Useful/CallApi';

function ProductsList() {
  // Example product data
  const [products,setproduct]=useState([])
  const {getdata}=CallApis()
const fetchproducts= async ()=>{
  // const {data}=await axios.get('https://dummyjson.com/products/category/laptops?page=2')
  const {data}=await  axios.get('http://localhost:3004/api/products')
 setproduct([...data]) 
console.log(data);

//  console.log(data);
 
}

useEffect(()=>{
  fetchproducts()
},[])
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            products.map((e,i)=>{
              return <Product data={e} key={i} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
