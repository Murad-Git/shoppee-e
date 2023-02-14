import { ShopItems } from '@/components/shopSection/ShopItems';
import { Filter, FilterPanel } from '@/components/ui/FilterPanel';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { filterSort, getInitialProducts } from '@/store/filterSlice';
import { Product } from '@/types/main';
import { uniqueCategories } from '@/utils/helpers';
import {
  faArrowDownAZ,
  faArrowDownShortWide,
  faArrowUpWideShort,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { ShopFilter } from '../shopSection/ShopFilter';

export const ShopPage = ({ products }: { products: Product[] }) => {
  const { categoriesArr } = uniqueCategories(products);
  const dispatch = useAppDispatch();
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
        <hr className="md:hidden mb-8" />
        <Filter
          className="filters-desktop"
          onConfirm={setShowFilter}
          categories={categoriesArr}
        />
        <div className="col-span-3 lg:col-span-3 2xl:col-span-4">
          <ShopFilter />
          <ShopItems products={filteredState} />
        </div>
      </div>
      {!!showFilter && (
        <FilterPanel
          className={`filters-mob ${darkState ? `dark-bg opacity-95` : ``}`}
          onConfirm={setShowFilter}
          categories={categoriesArr}
        />
      )}
    </div>
  );
};
