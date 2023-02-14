import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { filterSort } from '@/store/filterSlice';
import {
  faArrowDownAZ,
  faArrowDownShortWide,
  faArrowUpWideShort,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ShopFilter = () => {
  const dispatch = useAppDispatch();
  const initialState = useAppSelector((state) => state.filterSlice.initial);
  const filteredState = useAppSelector((state) => state.filterSlice.filtered);
  const currentFilter = useAppSelector(
    (state) => state.filterSlice.sortCurrent,
  );

  return (
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
  );
};
