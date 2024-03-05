import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useNavigate } from "react-router-dom";
import { Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';

export default function Service() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const handleClick = (productId) => {
    console.log("lo");
    // Navigate to "/Service" with the product ID as a parameter
    navigate(`/Service/sub/${productId}`);
  }

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching post data:', error);
      });
  }, [productId]); // Added productId to dependency array to fetch data when it changes

  return (
    <>
<div className='spacat'>
  <div className="maincontainer">
    <div className="spa">
      {product ? (
        <div className="subspa">
          <h2>{product.name}</h2>
          <img src={product.images[1]} alt="" />
          <br /><hr />
        </div>
      ) : null}
            {product ? (
              <div className="service">
                <h3 style={{marginLeft:'20px'}}>Select Your Service</h3>
                <div className="servicebox">
                {product.images.slice(2).map((image, index) => ( // Start from index 2
                  <div key={index} className="subsbox" onClick={() => handleClick(product._id)}>
                    <img src={image} alt={`Image ${index}`} />
                  </div>
                ))}
                </div>
              </div>
            ) : null}
          </div>
          <div className="sidebar">
            <div className="slider">
            {product ? (
              <Swiper
                className="mySwiper swiper-h"
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                style={{background:'red',height:'220px'}}
              >
                <SwiperSlide><img className='imgsli' src={product.images[1]} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgsli' src={product.images[1]} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgsli' src={product.images[1]} alt="" /></SwiperSlide>
                <SwiperSlide><img className='imgsli' src={product.images[1]} alt="" /></SwiperSlide>
              </Swiper>
            ) : null}
            </div>
            <div className="scroller">
              {product ? (
                product.images.slice(10).map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index}`} />
                ))
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}