import { carouselData } from '@/utils/database';
import { Carousel } from 'flowbite-react';
import ButtonCarousel from '../ui/ButtonCarousel';
import CarouselItem from './CarouselItem';

const CarouselItems = () => {
  return (
    <Carousel
      leftControl={<ButtonCarousel left={true} />}
      rightControl={<ButtonCarousel />}
    >
      {carouselData.map((item, index) => (
        <CarouselItem item={item} index={index + 1} key={index} />
      ))}
    </Carousel>
  );
};
export default CarouselItems;
