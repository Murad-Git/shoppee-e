import React from 'react';

interface Props {
  item: string;
}

export default function InputCheck({ item, ...props }: Props) {
  return (
    <>
      <input
        type="checkbox"
        name={item}
        id={item}
        className="w-4 h-4 text-accent-color bg-gray-100 rounded border-gray-300 focus:outline-none focus:ring-transparent dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
        {...props}
      />
      <label
        className="ml-2 text-base font-medium capitalize dark:text-gray-300 cursor-pointer"
        htmlFor={item}
      >
        {item}
      </label>
    </>
  );
}
