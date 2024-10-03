import axios from 'axios';

const API_URL = 'http://localhost:3004/api'; // Adjust the URL if needed

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getProducts = (page, limit) => {
  return axios.get(`${API_URL}/products?page=${page}&limit=${limit}`);
};

export const addToCart = (item) => {
  return axios.post(`${API_URL}/cart`, item, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

// More API functions as needed
