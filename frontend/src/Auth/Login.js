import React, { useState } from 'react';
import CallApis from '../Useful/CallApi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { postdata } = CallApis(); 
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const userdetails = {
      email: formdata.get('email'),
      password: formdata.get('password'),
    };
    
    try {
      const response = await postdata('login', userdetails);
      console.log('Login successful:', response);
      if (response.status) {
        localStorage.setItem('token', response.data.token);
        toast.success('Login successful!');
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  }

  async function register(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const userdetails = {
      name: formdata.get('name'),
      email: formdata.get('email'),
      password: formdata.get('password'),
    };

    try {
      const response = await postdata('register', userdetails);
      console.log('Registration successful:', response);
      if (response.status) {
        toast.success('Registration successful! Redirecting to login...');
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login' : 'Register'}
        </h2>

        {isLogin ? (
          // Login Form
          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Login
              </button>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        ) : (
          // Registration Form
          <form onSubmit={register}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                placeholder="Create a password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
              >
                Register
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:underline focus:outline-none"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>

      <ToastContainer /> {/* Toast container to render the toast notifications */}
    </div>
  );
}

export default Auth;
