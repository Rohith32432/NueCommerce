import React from 'react';
import { useNavigate } from 'react-router-dom';

function Product({data}) {
  // console.log(data);
  const navigate=useNavigate()
  function handleclick(){
console.log(data);
    navigate(`/product/${data.id}`)

  }

  return (
    <div className="flex items-center  justify-center  bg-gray-100">
      <div className="bg-white  cursor-pointer rounded-lg flex-1 shadow-lg max-w-sm"  onClick={handleclick}>
        {/* Product Image */}
       
        <img
          src={data.images ?data.images[0]:data.imageUrl}
          alt="Product"
          className="w-full h-52 object-cover rounded-t-lg"
        />:

      

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{data.title?data.title:data.name}</h2>
          {/* <p className="text-gray-600 mt-2">
           {data.description}
          </p> */}
          {/* Price */}
          <div className="mt-4">
            <span className="text-xl font-semibold text-indigo-600">${data.price}</span>
            {
              data.discountPercentage &&
            <span className="text-xl ml-11 font-semibold text-indigo-600">discount {data.discountPercentage}%</span>
            }
          </div>
            

          {/* Add to Cart Button */}
          {/* <div className="mt-6">
            <button
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Add to Cart
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Product;
