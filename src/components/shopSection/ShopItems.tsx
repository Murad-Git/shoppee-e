import React from 'react';
import ShopItem from './ShopItem';
import { Props } from './ShopSection';

export default function ShopItems({ products, ...props }: Props) {
  return (
    <div
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 px-12"
      {...props}
    >
      {products.map((item) => (
        <ShopItem key={item.id} {...item} />
      ))}
    </div>
  );
}

// const productItems = [
//   {
//     title: `Loft Lamp`,
//     type: `Lighting`,
//     price: `$25`,
//     id: 1,
//   },
//   {
//     title: `Cool Flower`,
//     type: `Decoration`,
//     price: `$20`,
//     id: 2,
//   },
//   {
//     title: `Cozy Sofa`,
//     type: `Furniture`,
//     price: `$150`,
//     id: 3,
//   },
//   {
//     title: `Awesome Candle`,
//     type: `Lighting`,
//     price: `$25`,
//     id: 4,
//   },
//   {
//     title: `Fancy Chair`,
//     type: `Furniture`,
//     price: `$70`,
//     id: 5,
//   },
//   {
//     title: `Chinese Teapot`,
//     type: `Decoration`,
//     price: `$50`,
//     id: 6,
//   },
//   {
//     title: `Soft Pillow`,
//     type: `Bedding`,
//     price: `$30`,
//     id: 7,
//   },
//   {
//     title: `Wooden basket`,
//     type: `Decoration`,
//     price: `$20`,
//     id: 8,
//   },
//   {
//     title: `Awesome Armchair`,
//     type: `Furniture`,
//     price: `$90`,
//     id: 9,
//   },
// ];
