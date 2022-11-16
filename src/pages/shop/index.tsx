import ShopItems from '@/components/shopSection/ShopItems';
import { Props } from '@/components/shopSection/ShopSection';
import { Filter, FilterPanel } from '@/components/ui/FilterPanel';
import { Product } from '@/types/main';
import { uniqueCategories } from '@/utils/helpers';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react';

interface State {
  initial: Product[];
  filtered: [] | Product[];
  categories: {
    [key: string]: boolean;
  };
  onstock: boolean;
}

export default function Shop({ products }: Props) {
  const { categoriesArr, categoriesObj } = uniqueCategories(products);
  const [showFilter, setShowFilter] = useState(false);
  const [productsList, setProductsList] = useState<State>({
    initial: products,
    filtered: products,
    categories: categoriesObj,
    onstock: true,
  });

  const filterCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    setProductsList((prevState) => {
      if (name === `onstock`) {
        return {
          ...prevState,
          onstock: !prevState.onstock,
        };
      } else {
        return {
          ...prevState,
          categories: {
            ...prevState.categories,
            [name]: !prevState.categories[name],
          },
        };
      }
    });
  };

  useEffect(() => {
    // returns list of categories which true
    const checkedProducts = Object.keys(productsList.categories).map(
      (key) => productsList.categories[key] && key,
    );

    // filter products which includes category of checkedProducts
    const filteredICategory = productsList.initial.filter(({ category }) =>
      checkedProducts.includes(category),
    );
    // filter products which includes onstock filter of initial or filteredCategory
    const filteredStock = filteredICategory.length
      ? filteredICategory.filter(
          ({ onstock }) => onstock === productsList.onstock,
        )
      : productsList.initial.filter(
          ({ onstock }) => onstock === productsList.onstock,
        );

    setProductsList((prevState) => ({
      ...prevState,
      filtered: filteredStock,
    }));
  }, [productsList.categories, productsList.onstock, productsList.initial]);
  const onHandleSort = (
    e: React.ChangeEvent<HTMLSelectElement>,
    // e: React.DetailedHTMLProps<
    //   SelectHTMLAttributes<HTMLSelectElement>,
    //   HTMLSelectElement
    // >,
  ) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="container mt-32 mb-12">
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
            categories={categoriesArr}
          />
          <div className="col-span-3 lg:col-span-3 2xl:col-span-4">
            <div className="hidden md:flex  justify-between items-center mb-12 px-12">
              <h6>
                Showing{` `}
                <span className="text-accent-color font-semibold">
                  {productsList.filtered.length}
                </span>
                {` `}
                of{` `}
                <span className="text-accent-color font-semibold">
                  {productsList.initial.length}
                </span>
                {` `}
                Products
              </h6>
              <div className="flex items-center min-w-[18rem]">
                <h6 className="mr-4 whitespace-nowrap">Sort by:</h6>
                <select
                  name="lth"
                  id="lth"
                  className="form-control h-12 w-48"
                  onChange={onHandleSort}
                >
                  <option value="lth">Price: Low to high</option>
                  <option value="htl">Price: High to low</option>
                </select>
              </div>
            </div>
            <ShopItems
              // className="mx-auto mb-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4  lg:grid-cols-3 2xl:grid-cols-4 px-12 col-span-3 lg:col-span-3 2xl:col-span-4"
              products={productsList.filtered}
            />
          </div>
        </div>
      </div>
      {showFilter && (
        <FilterPanel
          className="filters-mob"
          onConfirm={setShowFilter}
          onFilter={filterCategory}
          categories={categoriesArr}
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
