import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import FiterItems from './FiterItems';

function Filter() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceLimit, setPriceLimit] = useState('');
  const [categorys, setcategry] = useState([])
  const navigate=useNavigate()
  const handleSearch = async () => {
    
  navigate(`/filter?category=${selectedCategory}&limit=${priceLimit}`)
    console.log('Searching with:', { selectedCategory, priceLimit });
    setIsOpen(false);
  };
  async function category() {
    const { data } = await axios.get('http://localhost:3004/api/products/uid/category')
    setcategry(data)
    // console.log(data);

  }

  useEffect(() => {
    category()
  }, [])
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
      >
        <FaFilter  />
      </button>

      {isOpen && (
        <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">Filter Options</h2>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border rounded p-2"
              >
                <option value="">Select a category</option>
                {
                  categorys.map((e, i) => (
                    <option value={e.category} key={i}>{e.category || 'none'}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="price">
                Price Limit
              </label>
              <input
                type="number"
                id="price"
                value={priceLimit}
                onChange={(e) => setPriceLimit(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter price limit"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSearch}
                className="px-4 py-2 text-white bg-blue-500 rounded mr-2"
              >
                Search
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
}

export default Filter;
