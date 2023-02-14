import { Product } from '@/types/main';

export const uniqueCategories = (products: Product[]) => {
  const uniqueItems = (value: string, index: number, self: string[]) =>
    self.indexOf(value) === index;

  const uniqueCategories = products
    .map((item) => item.category)
    .filter(uniqueItems);

  const uniqueCategoriesObj = uniqueCategories.reduce(
    (o, key) => ({ ...(o as unknown as object), [key]: false }),
    {},
  );

  return {
    categoriesArr: uniqueCategories,
    categoriesObj: uniqueCategoriesObj,
  };
};

export const buttonVariants = (variant: string, size: string) => {
  let buttonClass = ``;
  let buttonSize = ``;
  switch (variant) {
    case `primary`:
      buttonClass = `btn btn-primary`;
      break;
    case `outline`:
      buttonClass = `btn btn-outline-primary mr-2`;
      break;
    case `unlogged`:
      buttonClass = `btn btn-unlogged`;
      break;
    case `logged`:
      buttonClass = `btn btn-primary`;
      break;
    default:
      buttonClass = `btn`;
  }
  switch (size) {
    case `normal`:
      buttonSize = `w-1/2 md:w-1/3 md:p-3`;
      break;
    case `small`:
      buttonSize = `w-1/2 md:w-1/4 md:p-3`;
    case `full`:
      buttonSize = `w-full`;
      break;
    default:
      buttonClass = `w-1/2 md:w-1/3 md:p-3`;
  }
  return `${buttonClass} ${buttonSize}`;
};
