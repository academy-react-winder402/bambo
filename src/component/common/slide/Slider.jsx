import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Leftimg } from '../../landing/box3/item/left/Leftimg';


const Slider = ({ course }) => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-[50rem] h-[25rem]"
      >

        {course.map((item, index) => {
          return (<SwiperSlide key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName}>
            <Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName} />
          </SwiperSlide>)
        })}


      </Swiper>
    </>



  );
};

export { Slider };