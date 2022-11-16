import uniqueCategoriesObj from '@/pages/shop/index';
import { Product } from '@/types/main';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IFilterState = {
  filtered: Product[] | [];
  sorted: Product[];
  filterActive: boolean;
  categories: typeof uniqueCategoriesObj;
};
const initialState: IFilterState = {
  filtered: [],
  sorted: [],
  filterActive: false,
  categories: uniqueCategoriesObj,
};

export const filterSlice = createSlice({
  name: `filters`,
  initialState,
  reducers: {
    filterCategory(
      state: IFilterState,
      { payload }: PayloadAction<{ category: string; applied: boolean }>,
    ) {
      //   state.categories[payload.category] = payload.applied;
    },
  },
});
