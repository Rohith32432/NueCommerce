import React from 'react';
import ProductsList from './ProductsList';
import Slider from './Slider';
import Random from './Rndom'; // Corrected spelling from 'Rndom' to 'Random'

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Slider Section */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Featured Products</h2 > */}
        <Slider />
      </section>

      {/* Products List Section */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Our Products</h2> */}
        <ProductsList />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Browse by Tags</h2>
        <div className="flex justify-center flex-wrap">
          {/* Example Tag Buttons */}
          <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Electronics</button>
          <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Fashion</button>
          <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Home & Garden</button>
          <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Books</button>
          <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Toys</button>
        </div>
      </section>
      {/* Random Products Section */}
      <section className="mb-8">
        {/* <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Random Products</h2> */}
        <Random />
      </section>

      {/* Tags Section */}
    </div>
  );
}

export default Home;
