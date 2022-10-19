import { useAppSelector } from '@/types/hooks';
import React from 'react';
import CarouselItems from './CarouselItems';

export default function HeroCarousel() {
  const products = useAppSelector((state) => state);
  // const product = useSelector((state) => state.reducer.products);
  // console.log(product);
  const handleDisplay = () => {
    console.log(products);
  };

  return (
    <div className="h-[33rem]" onClick={handleDisplay}>
      <CarouselItems />
    </div>
  );
}
