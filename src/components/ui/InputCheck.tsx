import React from 'react';

interface Props {
  item?: string;
  onFilter?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  props?: any;
}

export default function InputCheck({ item, onFilter, ...props }: Props) {
  return (
    <>
      <input
        type="checkbox"
        name={item}
        id={item}
        // checked={productsList.categories[item]}
        onChange={(value) => onFilter && onFilter(value)}
        // onChange={(value) => console.log(value.target.name)}
        className="w-4 h-4 md:w-5 md:h-5 text-accent-color bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-transparent dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        {...props}
      />
      <label
        className="ml-2 text-base font-medium capitalize dark:text-gray-300 cursor-pointer md:text-xl"
        htmlFor={item}
      >
        {(item === `onstock` && `On Stock`) ||
          (item === `outofstock` && `Out of Stock`) ||
          item}
      </label>
    </>
  );
}
