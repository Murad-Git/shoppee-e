import React from 'react';
import ShopItem from './ShopItem';

const productItems = [
  {
    title: `Loft Lamp`,
    type: `Lighting`,
    price: `$25`,
    id: 1,
  },
  {
    title: `Cool Flower`,
    type: `Decoration`,
    price: `$20`,
    id: 2,
  },
  {
    title: `Cozy Sofa`,
    type: `Furniture`,
    price: `$150`,
    id: 3,
  },
  {
    title: `Awesome Candle`,
    type: `Lighting`,
    price: `$25`,
    id: 4,
  },
  {
    title: `Fancy Chair`,
    type: `Furniture`,
    price: `$70`,
    id: 5,
  },
  {
    title: `Chinese Teapot`,
    type: `Decoration`,
    price: `$50`,
    id: 6,
  },
  {
    title: `Soft Pillow`,
    type: `Bedding`,
    price: `$30`,
    id: 7,
  },
  {
    title: `Wooden basket`,
    type: `Decoration`,
    price: `$20`,
    id: 8,
  },
  {
    title: `Awesome Armchair`,
    type: `Furniture`,
    price: `$90`,
    id: 9,
  },
];

export default function ShopItems() {
  return (
    <div className="mx-auto grid grid-cols-1 w-[20rem]">
      {productItems.map((item) => (
        <ShopItem key={item.id} {...item} />
      ))}
      {/* <div className="relative">
        <a>
          <div>
            <Image
              className="w-full z-0"
              src="/images/products/1.png"
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
            />
          </div>
        </a>
        <div className="absolute h-full z-10 top-0 right-4 left-[60%] max-w-[245px] w-full mx-auto translate-x-[35%] flex flex-col justify-center">
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

      <div className="mb-4 w-[10rem]">
        <div className="relative"></div>
        <div className="flex flex-col items-start max-w-[245px] mx-auto justify-start">
          <div>
            <a className="text-[#555] mt-4 inline-block">Furniture</a>
            <a className="cursor-pointer text-[#232323]">
              <h6 className="text-base font-bold mt-1">Cozy Sofa</h6>
            </a>
            <h6 className="text-base">$150</h6>
          </div>
        </div>
      </div> */}
    </div>
  );
}
