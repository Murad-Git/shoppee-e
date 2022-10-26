import { Product } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { RootState } from './store';
// import { AppState, State } from './store';
// import { RootState } from './store';

type IState = {
  productsList: Product[];
};

const initialState: IState = {
  productsList: [],
};

// middleware
// const middleware = [thunk];
// const addProduct =

export const productsSlice = createSlice({
  name: `products`,
  initialState,
  reducers: {
    addProduct: (state: IState, action: PayloadAction<Product>) => {
      state.productsList = [...state.productsList, action.payload];
    },
    removeProduct: (state: IState, { payload }: PayloadAction<string>) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== payload,
      );
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;

export const productsValue = (state: RootState) => state.products.productsList;
export const selectTotal = (state: RootState) =>
  state.products.productsList.reduce((acc, cur) => (acc += cur.price), 0);

export default productsSlice.reducer;
