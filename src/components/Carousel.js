// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import IMG1 from '../images/IMG1.png';
import IMG2 from '../images/IMG2.png';
import IMG3 from '../images/IMG3.png';
import IMG4 from '../images/IMG4.png';
// import {StaticImage} from "gatsby-plugin-image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";


// import required modules
import { Autoplay, Pagination, Navigation} from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
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
              <div className="grid-model">
                    <div className="title-content">
                      <p>
                        We offer web development, design, maintenance, and optimization services. Our experienced team creates beautiful, user-friendly websites tailored to your needs.
                        </p>
                     </div>    
                        <div className="image-relative">
                           <img src={IMG1} loading='lazy' alt=""/>
                        </div>
               </div>
        </SwiperSlide>
        <SwiperSlide> 
              <div className="grid-model">
                    <div className="title-content">
                      <p>
                      Our website offers app development services. We create beautiful and functional apps tailored to your needs. Choose us for your app development project.
                        </p>
                     </div>    
                        <div className="image-relative">
                           <img src={IMG2} loading='lazy' alt=""/>
                        </div>
               </div>
        </SwiperSlide>
        <SwiperSlide> 
              <div className="grid-model">
                    <div className="title-content">
                      <p>
                      We help businesses and individuals establish a strong social media presence through effective marketing and strategic planning. Our experienced team is dedicated to creating customized social media plans that deliver results. We offer a range of services including social media management, advertising, and analytics. Choose us as your reliable partner for your social media marketing and strategy needs.
                        </p>
                     </div>    
                        <div className="image-relative">
                           <img src={IMG3} loading='lazy' alt=""/>
                        </div>
               </div>
        </SwiperSlide>
        <SwiperSlide> 
              <div className="grid-model">
                    <div className="title-content">
                      <p>
                      Market Mate offer a comprehensive range of services to help businesses establish and maintain their online presence and reach their target audience through various digital marketing channels.
                        </p>
                     </div>    
                        <div className="image-relative">
                           <img src={IMG4} loading='lazy' alt=""/>
                        </div>
               </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

{/* 
        <swiper-client-msg> 
                We offer web development, design, maintenance, and optimization services. Our experienced team creates beautiful, user-friendly websites tailored to your needs
             </swiper-client-msg>

             <swiper-client-msg>
                Our website offers app development services. We create beautiful and functional apps tailored to your needs. Choose us for your app development project.
            </swiper-client-msg>

            <swiper-client-msg>
                We help businesses and individuals establish a strong social media presence through effective marketing and strategic planning. Our experienced team is dedicated to creating customized social media plans that deliver results. We offer a range of services including social media management, advertising, and analytics. Choose us as your reliable partner for your social media marketing and strategy needs.
            </swiper-client-msg>

            <swiper-client-msg>
        Market Mate offer a comprehensive range of services to help businesses establish and maintain their online presence and reach their target audience through various digital marketing channels.
        </swiper-client-msg> */}