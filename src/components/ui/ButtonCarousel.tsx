import { useAppSelector } from '@/types/hooks';

const ButtonCarousel = ({ left }: { left?: boolean }) => {
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <p
      className={`${darkState ? `bg-gray-800` : `bg-neutral-50`}  opacity-50 ${
        !!left && `rotate-180`
      }  hover:opacity-75 focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2`}
    >
      <svg
        aria-hidden="true"
        className="w-4 h-4"
        fill={darkState ? `white` : `black`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">{left ? `previous slide` : `next slide`}</span>
    </p>
  );
};

export default ButtonCarousel;
