import React, { useState, useEffect } from 'react';

function ProfileData() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDarkMode = theme === 'dark';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, Springfield, USA',
  };

  const pastOrders = [
    {
      orderId: '12345',
      date: '2024-09-01',
      total: 199.99,
      status: 'Delivered',
      items: [
        { productName: 'Product 1', price: 99.99 },
        { productName: 'Product 2', price: 100.00 },
      ],
    },
    {
      orderId: '67890',
      date: '2024-08-21',
      total: 59.99,
      status: 'Shipped',
      items: [{ productName: 'Product 3', price: 59.99 }],
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-white-900 py-8`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-500 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-gray-900 focus:outline-none focus:ring focus:ring-indigo-300 dark:focus:ring-yellow-300"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div> */}

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Profile Information
          </h2>
          <div className="text-gray-700 dark:text-gray-300">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Past Orders</h2>

          {pastOrders.length > 0 ? (
            pastOrders.map((order) => (
              <div key={order.orderId} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Order ID: {order.orderId}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Date:</strong> {order.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <strong>Status:</strong> {order.status}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Total:</strong> ${order.total.toFixed(2)}
                </p>

                <ul className="text-gray-700 dark:text-gray-300 mb-4">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.productName}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>

                <hr className="border-t border-gray-200 dark:border-gray-700 mt-4" />
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">You have no past orders.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileData;
