import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  type: string;
  price: string;
  id: number;
}

export default function ShopItem({ title, type, price, id }: Props) {
  // const dispatch = useAppDispatch();
  // const product = useAppSelector(selectProducts);

  const handleAdd = () => {
    // dispatch(addProduct());
  };
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="relative">
        <a>
          <div className="mx-auto" onClick={handleAdd}>
            <Image
              className="w-full z-0"
              src={`/images/products/${id}.png`}
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
            />
          </div>
        </a>
        <div className="absolute h-full top-0 right-4 translate-x-[35%] flex flex-col justify-center text-[#555]">
          <a className="mb-3 cursor-pointer">
            <FontAwesomeIcon className="text-xl" icon={faHeart} />
          </a>
          <a className="mb-3 cursor-pointer">
            <FontAwesomeIcon className="text-xl" icon={faHeart} />
          </a>
          <a
            className="
            mb-3 cursor-pointer"
          >
            <FontAwesomeIcon className="text-xl" icon={faHeart} />
          </a>
        </div>
      </div>

      <div className="mb-4 w-[10rem] ">
        <div className="relative ">
          <div className="flex flex-col items-start max-w-[245px] mx-auto justify-start">
            <div>
              <a className=" mt-4 inline-block text-[#555]">{type}</a>
              <a className="cursor-pointer text-[#232323]">
                <h6 className="text-base font-bold mt-1">{title}</h6>
              </a>
              <h6 className="text-base ">{price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <Image
//   className='bg-[url("/images/products/1.png")] w-full bg-cover bg-no-repeat min-h-[300px] z-0'
//   // src="/images/products/1.png"
//   height={500}
//   width={500}
//   objectFit="cover"
//   alt="product"
// />;
