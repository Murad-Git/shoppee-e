import ShopItems from '@/components/shopSection/ShopItems';
import FiltersMob from '@/components/ui/FiltersMob';
import { productsValue } from '@/store/productsSlice';
import { useAppSelector } from '@/types/hooks';
import React, { useState } from 'react';

export default function Products() {
  const [showFilter, setShowFilter] = useState(false);
  const products = useAppSelector(productsValue);
  const displayRedux = () => {
    console.log(products);
  };
  return (
    <>
      <div className="container mt-20 mb-12">
        <div>
          <div className="filters_mob flex justify-between">
            <button onClick={() => setShowFilter((prev) => !prev)}>F</button>
            <button onClick={displayRedux}>S</button>
          </div>
          <hr />
          <ShopItems />
        </div>
      </div>
      {showFilter && (
        <FiltersMob products={products} onConfirm={setShowFilter} />
      )}
    </>
  );
}
