import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <div className="bg-gray-100 min-h-screen">
    <main className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>

      {/* Swiper Component */}
      <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Register modules

        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img 
              src={`https://picsum.photos/300/200?random=${product.id}`} 
              alt={product.name} 
              className="w-full h-32 object-cover rounded-md mb-4" 
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  </div>
  )
}

export default Slider