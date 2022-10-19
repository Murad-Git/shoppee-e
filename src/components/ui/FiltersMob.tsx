import { Product } from '@/types/main';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from './Overlay';
import InputRange from 'react-input-range';
import { Input } from '@vechaiui/react';
import InputCheck from './InputCheck';

interface Props {
  // onConfirm: React.SetStateAction<boolean> => void;
  onConfirm: (value: React.SetStateAction<boolean>) => void;
  products: Product[];
}

const Filter = ({ onConfirm, products }: Props) => {
  const [priceValue, setPriceValue] = useState(`0`);
  const uniqueItems = (value: string, index: number, self: string[]) =>
    self.indexOf(value) === index;
  const uniqueCategories = products
    .map((item) => item.category)
    .filter(uniqueItems);

  return (
    <div className="fixed z-20 bg-white rounded-lg shadow-lg p-5 py-7 w-[90%] left-1/2 transform translate-x-[-50%] max-w-[500px] ">
      <div className="filter_categories mb-8">
        <div className="filter_title flex justify-between items-center mb-4">
          <h5 className="uppercase font-bold">categories</h5>
          <button onClick={() => onConfirm((prev) => !prev)}>
            <FontAwesomeIcon
              className="h-6 hover:text-accent-color"
              icon={faClose}
            />
          </button>
        </div>
        <div className="categories">
          {uniqueCategories.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <InputCheck item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="filter_price mb-4">
        <div className="filter_title flex flex-col">
          <h5 className="uppercase font-bold mb-4">price</h5>
          <p>Price Range: $0 - $1500</p>
          <label
            htmlFor="default-range"
            className="form-label text-gray-900 block mb-2 text-sm font-medium  dark:text-gray-300"
          >
            {priceValue}
          </label>
          <input
            max="1500"
            min="0"
            step="5"
            value={priceValue}
            type="range"
            onChange={(value) => setPriceValue(value.target.value)}
            className="form-range mb-6 w-full text-accent-color h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            id="default-range"
          />
        </div>
      </div>
      <div className="filter_availabity">
        <div className="filter_title flex justify-between">
          <h5 className="uppercase font-bold mb-4">categories</h5>
        </div>
        <div className="mt-3">
          <div className="mb-3">
            <InputCheck item="On Stock" />
          </div>
          <div>
            <InputCheck item="Out of Stock" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FiltersMob({ onConfirm, products }: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById(`overlays`) as Element,
      )}
      {ReactDOM.createPortal(
        <Filter onConfirm={onConfirm} products={products} />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
}
