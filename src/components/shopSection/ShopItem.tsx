import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  name: string;
  price: string | number;
  id: number | string;
  category: string;
  currency?: string;
  description?: string;
  image: string;
  onstock?: boolean;
  slug?: string;
  key?: string;
}

export default function ShopItem({
  name,
  category,
  price,
  image,
  slug,
}: Props) {
  const router = useRouter();
  // const dispatch = useAppDispatch();
  // const product = useAppSelector(selectProducts);
  const onGoProduct = () => {
    router.push(`/products/${slug}`);
  };
  const handleAdd = () => {
    // dispatch(addProduct());
  };
  return (
    <div
      onClick={onGoProduct}
      className="flex flex-col justify-center items-start cursor-pointer"
    >
      <div className="relative">
        <a>
          <div className="mx-auto" onClick={handleAdd}>
            <Image
              className="w-full z-0"
              src={image}
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
              <a className=" mt-4 inline-block text-[#555]">{category}</a>
              <a className="cursor-pointer text-[#232323]">
                <h6 className="text-base font-bold mt-1">{name}</h6>
              </a>
              <h6 className="text-base ">${price}</h6>
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
