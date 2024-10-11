import React, { useEffect, useState } from 'react';
import ProfileData from './Ppage';
import CallApis from '../Useful/CallApi';

function Profile() {
  const [click, setClick] = useState(false);
  const{getdata}=CallApis()
  const [data,setdata]=useState({})
  async function get(){
    const data= await getdata('profile')
   setdata(data)
  }
  useEffect(()=>{
get()
  },[])
  
  return (
    <div className="relative flex justify-center items-start p-6 w-full min-h-screen flex-wrap bg-gray-100">
      <button className='absolute top-0' onClick={() => setClick(!click)}>Toggle</button>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {click ? (
          <>
            <div className="flex items-center justify-center">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
            </div>
            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
              <p className="text-gray-600">{data.email}</p>
            </div>
            <div className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  id="bio"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Tell something about yourself..."
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        ) : (
            <div >
            <img
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              className="w-32 relative left-0 h-32 rounded-full mx-auto border-4 border-indigo-600"
            />
            <h2 className="text-3xl font-bold text-gray-800 mt-4">{data.name}</h2>
            <p className="text-gray-600 text-sm mt-1">{data.email}</p>
            <div className="mt-6">
              <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="bio">
                Bio
              </label>
              <p className="text-gray-500">A short bio goes here. Write something interesting!</p>
              
              <label className="block text-gray-700 text-sm font-bold mt-4 mb-1" htmlFor="address">
                Address
              </label>
              <p className="text-gray-500">Your address goes here.</p>
            </div>
          </div>
          
        )}
      </div>
      <div className='flex-1'>
        <ProfileData />
      </div>
    </div>
  );
}

export default Profile;
