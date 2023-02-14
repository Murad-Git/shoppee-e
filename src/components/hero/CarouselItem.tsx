import { useAppSelector } from '@/hooks/hooks';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { Button } from '../ui/Button';

interface Props {
  item: string;
  index: number;
}

export const CarouselItem = ({ item, index }: Props) => {
  const router = useRouter();
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <div className="flex w-full h-full items-center justify-center bg-gray-400 relative">
      <div className="w-full h-full relative">
        <Image
          src={`/images/hero-carus-${index}.png`}
          objectFit="cover"
          layout="fill"
          alt="carousel"
          priority
        />
        <div className="container h-full flex flex-col justify-center absolute top-0">
          <div className="h-full flex flex-wrap ">
            <div
              className={`h-full w-full flex flex-col items-center md:pl-20 md:items-start justify-center px-5 ${
                darkState ? `dark-carousel` : ``
              }`}
            >
              <p className="font-bold uppercase mb-2 mt-0 ">{item}</p>
              <h2 className="mb-2 text-3xl font-normal leading-5">get all</h2>
              <h1 className="font-bold uppercase mt-1 text-4xl">
                the good stuff
              </h1>
              <Button
                variant="primary"
                size="small"
                onClick={() => router.push(`/shop`)}
              >
                view more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
