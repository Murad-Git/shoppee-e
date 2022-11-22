import { Carousel } from 'flowbite-react';
import CarouselItem from './CarouselItem';

const carouselData = [`chair`, `lamp`, `picture`];

export default function CarouselItems() {
  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <CarouselItem item={item} index={index + 1} key={index} />
      ))}
    </Carousel>
  );
}
