import ShopItems from '@/components/shopSection/ShopItems';
import { Props } from '@/components/shopSection/ShopSection';
import { Filter, FilterPanel } from '@/components/ui/FilterPanel';
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
import { useEffect, useState } from 'react';

export default function Shop({ products }: Props) {
  const { categoriesArr } = uniqueCategories(products);
  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.filterSlice.initial);
  const filteredState = useAppSelector((state) => state.filterSlice.filtered);
  const currentFilter = useAppSelector(
    (state) => state.filterSlice.sortCurrent,
  );
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (!products) return;
    dispatch(getInitialProducts(products));
  }, [products, dispatch]);
  return (
    <>
      <div className="container mt-32 mb-12">
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
                <span className="text-accent-color font-semibold">
                  {filteredState.length}
                </span>
                {` `}
                of{` `}
                <span className="text-accent-color font-semibold">
                  {initialState.length}
                </span>
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
                  className="form-control h-12 w-48"
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
      {showFilter && (
        <FilterPanel
          className="filters-mob"
          onConfirm={setShowFilter}
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
    throw new Error(error as string);
  }
};
