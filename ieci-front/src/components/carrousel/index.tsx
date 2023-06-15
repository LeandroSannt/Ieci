import React, { useRef, useState } from "react";
// Import Swiper React components
import { A11y, Controller, FreeMode, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface LayoutProps {
  totalCards:number
  spacing?:number
  children?: React.ReactNode;
}

const Carrousel:React.FC<LayoutProps> = ({totalCards,spacing = 40,children}) =>{

  return (
    <Swiper
        loop={true}
        navigation={true}
        slidesPerView={4}
        spaceBetween={spacing}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {children}
    </Swiper>
  )
}

export default Carrousel 