import ShopItems from '@/components/shopSection/ShopItems';
import { Props } from '@/components/shopSection/ShopSection';
import { FilterPanel } from '@/components/ui/FilterPanel';
import { Filter } from '@/components/ui/FilterPanel';
import { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

interface State {
  initial: Product[];
  categories: {
    [key: string]: boolean;
  };
  stock: {
    [key: string]: boolean;
  };
}

export default function Products({ products }: Props) {
  const uniqueItems = (value: string, index: number, self: string[]) =>
    self.indexOf(value) === index;
  const uniqueCategories = products
    .map((item) => item.category)
    .filter(uniqueItems);
  const uniqueCategoriesObj = uniqueCategories.reduce(
    (o, key) => ({ ...(o as object), [key]: false }),
    {},
  );
  const [showFilter, setShowFilter] = useState(false);
  const [productsList, setProductsList] = useState<State>({
    initial: products,
    categories: uniqueCategoriesObj,
    stock: {
      onstock: false,
      outofstock: false,
    },
  });
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(`hello`);
    setCounter(1);
  }, [productsList]);
  console.log(counter);
  const filterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // name === 'onstock' || name === 'outofstock' && setProductsList((prevState) => {
    //   return {
    //     ...prevState,
    //     stock: {
    //       [name]: !prevState.stock[name]
    //     }
    //   }
    // })
    setProductsList((prevState) => {
      if (name === `onstock` || name === `outofstock`) {
        return {
          ...prevState,
          stock: {
            ...prevState.stock,
            [name]: !prevState.stock[name],
          },
        };
      }
      return {
        ...prevState,
        categories: {
          ...prevState.categories,
          [name]: !prevState.categories[name],
        },
      };
    });
  };

  const filteredProducts = () => {
    const checkedProducts = Object.keys(productsList.categories).map(
      (key) => productsList.categories[key] && key,
    );
    const onStock = Object.keys(productsList.stock).map(
      (key) => productsList.stock[key] && key,
    );
    return productsList.initial.filter(({ category }) =>
      checkedProducts.includes(category),
    );
  };

  return (
    <>
      <div className="container mt-20 mb-12">
        <div className="md:grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5">
          <div className="filters_mob flex justify-between md:hidden">
            <button onClick={() => setShowFilter((prev) => !prev)}>F</button>
            <button>S</button>
          </div>
          <hr className="md:hidden" />
          <Filter
            className="filters-desktop"
            onConfirm={setShowFilter}
            onFilter={filterCategory}
            categories={uniqueCategories}
          />
          <ShopItems
            className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4  lg:grid-cols-3 2xl:grid-cols-4 px-12 col-span-3 lg:col-span-3 2xl:col-span-4"
            products={
              filteredProducts().length === 0
                ? productsList.initial
                : filteredProducts()
            }
          />
        </div>
      </div>
      {showFilter && (
        <FilterPanel
          className="filters-mob"
          onConfirm={setShowFilter}
          onFilter={filterCategory}
          categories={uniqueCategories}
        />
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();
    if (!products)
      return {
        notFound: true,
        redirect: `/`,
      };
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
