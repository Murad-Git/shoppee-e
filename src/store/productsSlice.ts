import { Product } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { AppState, State } from './store';
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
  },
});

export const { addProduct } = productsSlice.actions;

export const productsValue = (state: AppState) => state.reducer.productsList;

export default productsSlice.reducer;
