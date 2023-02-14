// Import Swiper React components
import { Main } from '@/types/main';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';

export const Slider = ({ children }: Main) => {
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
};
