import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import InputCheck from './InputCheck';
import { Backdrop } from './Overlay';

interface Props {
  onConfirm: (value: React.SetStateAction<boolean>) => void;
  onFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categories: string[];
  className?: string;
}

export const Filter: React.FC<Props> = ({
  onConfirm,
  onFilter,
  categories,
  className,
}) => {
  const [priceValue, setPriceValue] = useState(`0`);

  return (
    <div className={className}>
      <div className="filter_categories mb-8">
        <div className="filter_title flex justify-between items-center mb-4 md:mb-12">
          <h5 className="uppercase font-bold md:text-2xl">categories</h5>
          <button
            className="md:hidden"
            onClick={() => onConfirm((prev) => !prev)}
          >
            <FontAwesomeIcon
              className="h-6 hover:text-accent-color"
              icon={faClose}
            />
          </button>
        </div>
        <div className="categories">
          {categories.map((item, index) => (
            <div key={index} className="flex items-center mb-3">
              <InputCheck item={item} onFilter={onFilter} />
            </div>
          ))}
        </div>
      </div>
      <div className="filter_price mb-4 md:my-12">
        <div className="filter_title flex flex-col">
          <h5 className="uppercase font-bold mb-4 md:mb-10 md:text-2xl">
            price
          </h5>
          <p className="text-[#555] text-lg">
            Price Range: <span className="block my-1">$0 - $1500</span>
          </p>
          <label
            htmlFor="default-range"
            className="form-label text-gray-900 block mb-2 text-sm font-medium  dark:text-gray-300 md:text-base"
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
            onInput={(value) => console.log(value)}
            className="form-range mb-6 w-full text-accent-color h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            id="default-range"
          />
        </div>
      </div>
      <div className="filter_availabity md:my-12">
        <div className="filter_title flex justify-between">
          <h5 className="uppercase font-bold mb-4 md:text-2xl">On Stock</h5>
        </div>
        <div className="mt-3">
          <div>
            <InputCheck item="onstock" onFilter={onFilter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export function FilterPanel({
  onConfirm,
  onFilter,
  categories,
  className,
}: Props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById(`overlays`) as Element,
      )}
      {ReactDOM.createPortal(
        <Filter
          className={className}
          categories={categories}
          onFilter={onFilter}
          onConfirm={onConfirm}
          // products={products}
        />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
}
