import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/UserContext';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const {user}=useAuth()
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3004/api/orders/${1}`);
        console.log(data);
        
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">image</th>
            <th className="border border-gray-300 px-4 py-2">Product ID</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{order.id}</td>
              {/* <td className="border border-gray-300 px-4 py-2">{order.userId}</td> */}
              <img src={order.Product.imageUrl} className='h-24'alt="" />
              <td className="border border-gray-300 px-4 py-2">{order.productId}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(order.date).toLocaleDateString()}</td>
              <td className="border border-gray-300 px-4 py-2">{order.status}</td>
              <td className="border border-gray-300 px-4 py-2">{order.Product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <></>
  );
}

export default Orders;
