import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Slider() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulating fetching images
    const fetchImages = () => {
      const dummyImages = [
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9d56fb9fb543451d.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ad5ba37c3ae2aaa.jpeg?q=20',
        'https://images-eu.ssl-images-amazon.com/images/G/31/imgg/hero/1499/30th/nov/hero1300x1200._CB572143637_.jpg',
'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/226943834a8963a6.jpeg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/0fe6fe49c8067766.jpg?q=20',
      ];
      setImages(dummyImages);
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold mb-6">Featured Images</h2>

        {/* Swiper Component for Images */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Register modules
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
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
          {images.map((image, index) => (
            <SwiperSlide key={index} className="bg-white rounded-lg shadow-md">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-md" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </div>
  );
}

export default Slider;
