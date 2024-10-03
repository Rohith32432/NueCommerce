import React, { useState } from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAuth = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setCart([]);
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="App"> 
      {isAuthenticated ? (
        <>
          <Header onLogout={handleLogout} />
          <ProductList onAddToCart={handleAddToCart} />
          <Cart items={cart} />
        </>
      ) : (
        <Auth onAuth={handleAuth} />
      )}
    </div>
  );
};

export default App;
