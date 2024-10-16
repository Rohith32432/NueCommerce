import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/UserContext';
import Search from './Search';
import Filter from './Filter';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const renderLinks = () => {
    if (token) {
      return (
        <>
          <Link to="/" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/cart" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">cart</Link>
          <Link to="/Profile" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
          <Link to="/order" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">orders</Link>
          <Link to={'/'} onClick={logout} className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Log Out</Link>
        </>
      );
    }
    return (
      <>
        <Link to="/login" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
        <Link to="/reg" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-black font-bold text-2xl">MY Store</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center items-baseline space-x-4">
              {renderLinks()}
            </div>
          </div>
          {
            token &&(
              <>
              
              <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Filter/>
             
             <Search/>
            </div>
          </div>
              </>
            )
          }
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderLinks()}
          </div>
          {
            token &&
          <div className="  md:block">
            <div className="ml-10 flex items-baseline space-x-4">
             <Search/>
            </div>
          </div>
          }
        </div>
      )}
    </nav>
  );
}

export default NavBar;
