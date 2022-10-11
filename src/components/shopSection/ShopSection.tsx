import React from 'react';
import Button from '../ui/Button';
import ShopItems from './ShopItems';

export default function ShopSection() {
  return (
    <div className="my-20 container">
      <h3 className="font-bold text-center mb-6">New Arrivals</h3>
      <div className="mb-2 flex flex-wrap justify-center">
        <div className="relative w-full px-2">
          <p className="text-[#555] text-center mb-6">
            Check out our new furniture collection! Cozy sofa, fancy chair,
            wooden casket, and many more. The new collection brings an informal
            elegance to your home.
          </p>
        </div>
      </div>
      <ShopItems />
      <div className="flex justify-center">
        <Button className="btn btn-outline-primary">view more</Button>
      </div>
    </div>
  );
}
