import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { filterCategory } from '@/store/filterSlice';
import React from 'react';

interface Props {
  item?: string;
  onFilter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  props?: any;
}

export const InputCheck = ({ item, ...props }: Props) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.filterSlice.categories);
  const onstock = useAppSelector((state) => state.filterSlice.onstock);
  return (
    <>
      <input
        aria-labelledby={item}
        type="checkbox"
        name={item}
        id={item}
        checked={
          item === `onstock` ? !onstock : categories[item as string] || false
        }
        onChange={(value) => dispatch(filterCategory(value))}
        // onChange={(value) => onFilter && onFilter(value)}
        className="w-4 h-4 md:w-5 md:h-5 text-accent-color bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-transparent dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        {...props}
      />
      <label
        className="ml-2 text-base font-medium capitalize dark:text-gray-300 cursor-pointer md:text-xl"
        htmlFor={item}
      >
        {(item === `onstock` && `Out of Stock`) || item}
      </label>
    </>
  );
};
