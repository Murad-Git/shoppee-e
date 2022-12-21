import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';
import InputCheck from './InputCheck';
import { Backdrop } from './Overlay';

interface Props {
  onConfirm: (value: React.SetStateAction<boolean>) => void;
  categories: string[];
  className?: string;
}

const Filter: React.FC<Props> = ({ onConfirm, categories, className }) => {
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
              <InputCheck item={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="filter_availabity md:my-12">
        <div className="filter_title flex justify-between">
          <h5 className="uppercase font-bold mb-4 md:text-2xl">On Stock</h5>
        </div>
        <div className="mt-3">
          <div>
            <InputCheck item="onstock" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;

export const FilterPanel = ({ onConfirm, categories, className }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById(`overlays`) as Element,
      )}
      {ReactDOM.createPortal(
        <Filter
          className={className}
          onConfirm={onConfirm}
          categories={categories}
          // products={products}
        />,
        document.getElementById(`overlays`) as Element,
      )}
    </>
  );
};
