import ShopItems from '@/components/shopSection/ShopItems';
import { Props } from '@/components/shopSection/ShopSection';
import Filter, { FilterPanel } from '@/components/ui/FilterPanel';
import { filterSort, getInitialProducts } from '@/store/filterSlice';
import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { uniqueCategories } from '@/utils/helpers';
import { sanityRequest } from '@/utils/requests';
import {
  faArrowDownAZ,
  faArrowDownShortWide,
  faArrowUpWideShort,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';

const Shop: NextPage<Props> = ({ products }) => {
  const { categoriesArr } = uniqueCategories(products);
  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.filterSlice.initial);
  const filteredState = useAppSelector((state) => state.filterSlice.filtered);
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  const currentFilter = useAppSelector(
    (state) => state.filterSlice.sortCurrent,
  );
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (!products) return;
    dispatch(getInitialProducts(products));
  }, []);
  return (
    <>
      <Head>
        <title>E-commerce webshop</title>
        <meta
          name="description"
          content="Find your favourite product, buy it immediately or save it for later"
          key="desc"
        />
      </Head>
      <div className="container pt-24 pb-12">
        <div className="md:grid md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5">
          <div className="filters_mob flex justify-between md:hidden px-3">
            <button onClick={() => setShowFilter((prev) => !prev)}>
              <FontAwesomeIcon className="h-5 mr-1" icon={faFilter} />
            </button>
            <button
              className="font-semibold"
              onClick={() => dispatch(filterSort(`mobile`))}
            >
              <FontAwesomeIcon
                className="h-5 mr-1"
                icon={
                  currentFilter && currentFilter.value === `htl`
                    ? faArrowUpWideShort
                    : currentFilter.value === `alph`
                    ? faArrowDownAZ
                    : faArrowDownShortWide
                }
              />
              {currentFilter.name || `Sort`}
            </button>
          </div>
          <hr className="md:hidden" />
          <Filter
            className="filters-desktop"
            onConfirm={setShowFilter}
            categories={categoriesArr}
          />
          <div className="col-span-3 lg:col-span-3 2xl:col-span-4">
            <div className="hidden md:flex justify-between items-center mb-12 px-12">
              <h6>
                Showing{` `}
                <p className="text-accent-color font-semibold inline-block">
                  {filteredState.length}
                </p>
                {` `}
                of{` `}
                <p className="text-accent-color font-semibold inline-block">
                  {initialState.length}
                </p>
                {` `}
                Products
              </h6>
              <div className="flex items-center min-w-[18rem]">
                <button className="font-semibold">
                  <FontAwesomeIcon
                    className="h-5 mr-1"
                    icon={
                      currentFilter && currentFilter.value === `htl`
                        ? faArrowUpWideShort
                        : currentFilter.value === `alph`
                        ? faArrowDownAZ
                        : faArrowDownShortWide
                    }
                  />
                  {currentFilter.name || `Sort`}
                </button>
                <select
                  name="lth"
                  id="lth"
                  className="form-control h-12 w-48 bg-slate-800 fill-slate-800"
                  onChange={(e) => dispatch(filterSort(e))}
                  value={currentFilter.value}
                >
                  <option value="lth">Price: Low to high</option>
                  <option value="htl">Price: High to low</option>
                  <option value="alph">Alphabetically</option>
                </select>
              </div>
            </div>
            <ShopItems products={filteredState} />
          </div>
        </div>
      </div>
      {!!showFilter && (
        <FilterPanel
          className={`filters-mob ${darkState ? `dark-bg opacity-95` : ``}`}
          onConfirm={setShowFilter}
          categories={categoriesArr}
        />
      )}
    </>
  );
};

export default Shop;
//@ts-ignore: Unreachable code error
export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();
    if (!products)
      return {
        redirect: {
          destination: `/`,
          permanent: false,
        },
      };
    return {
      props: {
        products,
      },
      revalidate: 30,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return {
        notFound: true,
      };
    }
  }
};
