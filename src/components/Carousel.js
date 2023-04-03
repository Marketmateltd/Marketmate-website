// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMG1 from '../images/IMG1.png';
import IMG2 from '../images/IMG2.png';
import IMG3 from '../images/IMG3.png';
import IMG4 from '../images/IMG4.png';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={IMG1} alt='IMG1'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG2} alt='IMG2'/>
           </SwiperSlide>
        <SwiperSlide>
            <img src={IMG3} alt='IMG3'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={IMG4} alt='IMG4'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
