import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

interface Props {
  item: string;
  index: number;
}

export default function CarouselItem({ item, index }: Props) {
  const [hasMounted, setHasMounted] = useState(false);

  const style: React.CSSProperties = {
    backgroundImage: `url('/images/hero-carus-${index}.png')`,
    width: `100%`,
    height: `calc(100vh/2)`,
    backgroundSize: `cover`,
    backgroundPosition: `top, center`,
    backgroundRepeat: `no-repeat`,
    minHeight: `600px`,
  };
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white font-['montserrat']">
      <div style={hasMounted ? style : undefined}>
        <div className="container h-full flex flex-col justify-center">
          <div className="h-full flex flex-wrap ">
            <div className="h-full w-full flex flex-col items-center justify-center px-5 relative">
              <p className="text-[#bd744c] font-bold uppercase mb-2 mt-0 ">
                {item}
              </p>
              <h2 className="mb-2 text-3xl font-normal leading-5">get all</h2>
              <h1 className="font-bold uppercase mt-1 text-4xl">
                the good stuff
              </h1>
              <Button className="btn-primary btn">view more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
