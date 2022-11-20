import { Product } from '@/types/main';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';
import { RootState } from './store';

// interface IDataAction {
//   action?: {
//     payload:any
//   }
// }
type IFilterState = {
  initial: Product[];
  filtered: Product[] | [];
  sortList: { name: string; value: string }[];
  sortCurrent: { name?: string; value?: string };
  categories: {
    [key: string]: boolean;
  };
  onstock: boolean;
};
const initialState: IFilterState = {
  initial: [],
  filtered: [],
  sortList: [
    { name: `Sort`, value: `lth` },
    { name: `Sort`, value: `htl` },
    { name: `Alph`, value: `alph` },
  ],
  sortCurrent: {},
  categories: {},
  onstock: true,
};

export const filterSlice = createSlice({
  name: `filters`,
  initialState,
  reducers: {
    getInitialProducts(
      state: IFilterState,
      { payload }: PayloadAction<Product[]>,
    ) {
      if (payload) {
        state.initial = payload;
        state.filtered.length ? `` : (state.filtered = payload);
      }
    },
    filterCategory(
      state: IFilterState,
      { payload }: PayloadAction<React.ChangeEvent<HTMLInputElement>>,
    ) {
      if (payload.target.name === `onstock`) {
        state.onstock = !state.onstock;
      } else {
        state.categories = {
          ...state.categories,
          [payload.target.name]: payload.target.checked,
        };
      }

      const checkedProducts = Object.keys(state.categories).map(
        (key) => state.categories[key] && key,
      );
      // filter products which includes category of checkedProducts
      state.filtered = state.initial.filter(({ category }) =>
        checkedProducts.includes(category),
      );
      // filter products which includes onstock filter of initial or filteredCategory
      state.filtered = state.filtered.length
        ? state.filtered.filter(({ onstock }) => onstock === state.onstock)
        : state.initial.filter(({ onstock }) => onstock === state.onstock);
    },
    filterSort(
      state: IFilterState,
      action: PayloadAction<React.ChangeEvent<HTMLSelectElement>>,
    ) {
      const sortItems = (type: string) => {
        type === `lth` && state.filtered.sort((a, b) => a.price - b.price);
        type === `htl` && state.filtered.sort((a, b) => b.price - a.price);
        type === `alph` &&
          state.filtered.sort((a, b) => a.name.localeCompare(b.name));
      };
      // Desktop
      if (action && action.payload) {
        const { value: sortType } = action.payload.target as HTMLSelectElement;
        sortItems(sortType);
        // Mobile
      } else {
        if (state.sortCurrent && Object.keys(state.sortCurrent).length > 0) {
          for (let i = 0; i < state.sortList.length; i++) {
            if (state.sortList[i].value === state.sortCurrent.value) {
              const nextIndex = i === 2 ? 0 : i + 1;
              sortItems(state.sortList[nextIndex].value);
              state.sortCurrent = state.sortList[nextIndex];
              break;
            }
          }
        } else {
          state.sortCurrent = state?.sortList[0];
          sortItems(`lth`);
        }
      }
    },
  },
});
export const initialStateValue = (state: RootState) =>
  state.filterSlice.initial;

export const { getInitialProducts, filterCategory, filterSort } =
  filterSlice.actions;

export default filterSlice.reducer;
