import React, { useEffect, useState } from 'react';
import CallApis from '../Useful/CallApi';
import { useAuth } from '../Context/UserContext';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { getdata ,deleterequest} = CallApis();
const {user}=useAuth()

  const fetchProduct = async () => {
    try {
      const data = await getdata(`/cart/${user.id}`);
      setCartItems(data);
    } catch (err) {
      console.log(err);
    }
  };
   
  

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } 
          : item
      )
    );
  };
  async function dleteitem(id) {
    try {
      const data = await deleterequest('/cart/'+id);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [user]);

  const totalPrice = cartItems.reduce((total, item) => total + item.Product.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <img
                    src={item.Product.imageUrl}
                    alt={item.Product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-bold text-gray-800">{item.Product.name}</h2>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-300 text-gray-800 py-1 px-2 rounded-lg hover:bg-gray-400 focus:outline-none"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-lg font-semibold text-gray-800">${(item.Product.price * item.quantity).toFixed(2)}</div>
                  <button  onClick={()=>{dleteitem(item.id)}} className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300">
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">Total: ${totalPrice.toFixed(2)}</h2>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
