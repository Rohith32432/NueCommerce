import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CallApis from '../Useful/CallApi';
import { useAuth } from '../Context/UserContext';

function IndividualProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user}=useAuth()
const {postdata}=CallApis()
  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3004/api/products/${id}`);
      setProduct(data);
      setLoading(false);
      console.log(data);
      
    } catch (err) {
      setError('Failed to load product');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const handleBuyNow = () => {
    alert(`Proceed to buy: ${product.title}`);
  };

  const handleAddToCart = async() => {
    const response=await postdata('/addtocart',{
        quant:product.stock,
        uid:user.id,
        pid:id,
    })
    console.log(response);
    
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center">
          {product.thumbnail ? (
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full max-w-sm object-cover rounded-lg shadow-lg"
            />
          ):
          <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full max-w-sm object-cover rounded-lg shadow-lg"
            />
          }
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title || product.name}</h1>
          <h2 className="text-xl text-gray-600">{product.description || 'No Description Available'}</h2>
          <div>
            <span className="text-lg font-semibold text-green-600">
              ${product.price || 'N/A'}
            </span>
            {product.discountPercentage && (
              <span className="ml-2 text-sm line-through text-gray-500">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <div className={`font-semibold ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </div>

          <ul className="space-y-1 text-gray-700">
            {product.brand && <li><strong>Brand:</strong> {product.brand}</li>}
            {product.category && <li><strong>Category:</strong> {product.category}</li>}
            {product.sku && <li><strong>SKU:</strong> {product?.sku}</li>}
          </ul>

          <div className="flex items-center space-x-1">
            {product.rating && (
              <>
                <span className="text-yellow-500 text-lg font-bold">{product?.rating}</span>
                <span className="text-sm text-gray-500">
                  (Based on {product.reviews.length} reviews)
                </span>
              </>
            )}
          </div>

          {product.warrantyInformation && (
            <div className="space-y-2 text-gray-600">
              <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            </div>
          )}

          {product.shippingInformation && (
            <div className="space-y-2 text-gray-600">
              <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            </div>
          )}

          {product.returnPolicy && (
            <div className="text-sm text-gray-500">
              <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
            </div>
          )}

          {product.tags && product.tags.length > 0 && (
            <div className="flex space-x-2 mt-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Reviews</h3>
          <div className="space-y-4 mt-4">
            {product.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{review.reviewerName}</span>
                  <span className="text-yellow-500 font-semibold">{review.rating} ★</span>
                </div>
                <p className="text-gray-700 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndividualProduct;
