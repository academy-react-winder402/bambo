import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Leftimg } from '../../landing/box3/item/left/Leftimg';


const Slider = ({ course }) => {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[20rem] h-[30rem]"
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