import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles2.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rightimg } from '../../landing/box5/item/right/Rightimg';

const Slide2 = ({news}) => {
    return (

        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-[40rem] h-[25rem]"
            >
        {news.map((item, index) => {
          return (<SwiperSlide key={index} im={item.tumbImageAddress}>
            <Rightimg key={index} im={item.tumbImageAddress}  />
          </SwiperSlide>)
        })}
            </Swiper>
        </>
    );
};

export { Slide2 };