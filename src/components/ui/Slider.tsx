import React from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import { Main } from '@/types/main';

export default function Slider({ children }: Main) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      slidesPerGroup={1}
      breakpoints={{
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        1280: {
          slidesPerGroup: 2,
          slidesPerView: 4,
        },
      }}
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
