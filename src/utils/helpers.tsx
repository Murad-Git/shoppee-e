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
