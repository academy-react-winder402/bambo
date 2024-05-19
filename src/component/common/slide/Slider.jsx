import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Leftimg } from '../../landing/box3/item/left/Leftimg';


const Slider = ({course}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
  
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
      {course.map((item,index) =>{
               return( <SwiperSlide key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName}>
                <Leftimg key={index} im={item.tumbImageAddress} title={item.title} teacher={item.teacherName} typename={item.typeName}/>
               </SwiperSlide>)
            })}
    </Swiper>
  );
};

export{Slider};