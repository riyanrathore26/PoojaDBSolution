import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image3 from './Static_img/Potli-Massage-17-1-24.jpg';
import image4 from './Static_img/Potli-Massage-17-1-24.jpg';
import image5 from './Static_img/Potli-Massage-17-1-24.jpg';
import image6 from './Static_img/Potli-Massage-17-1-24.jpg';
import image7 from './Static_img/Potli-Massage-17-1-24.jpg';
import image8 from './Static_img/Potli-Massage-17-1-24.jpg';
// import image4 from './Static_img/Rejuvemate-Yourself-female-web-17-1-24.jpg';
// import image5 from './Static_img/Rica-Waxing-17-1-24.jpg';
// import image6 from './Static_img/Potli-Massage-web-17-1-24.jpg';
// import image7 from './Static_img/Rejuvemate-Yourself-male-17-01-24.jpg';
// import image8 from './Static_img/Rica-Waxing-web-17-1-24.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Header() {
  return (
    <>
      <style>
        {`
          .swiper {
            width: 100%;
            height: 400px;
            background-color: red;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: blue;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .swiper-pagination {
            /* position: relative; */
            /* top: 100px; */
            padding: 50px;
          }
        `}
      </style>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
