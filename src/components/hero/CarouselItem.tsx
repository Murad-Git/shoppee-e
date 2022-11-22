import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Button from '../ui/Button';

interface Props {
  item: string;
  index: number;
}

export default function CarouselItem({ item, index }: Props) {
  const router = useRouter();
  return (
    <div className="flex w-full h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white relative">
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
            <div className="h-full w-full flex flex-col items-center justify-center px-5">
              <p className="text-accent-color font-bold uppercase mb-2 mt-0 ">
                {item}
              </p>
              <h2 className="mb-2 text-3xl font-normal leading-5">get all</h2>
              <h1 className="font-bold uppercase mt-1 text-4xl">
                the good stuff
              </h1>
              <Button
                className="btn-primary btn"
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
}
