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
    addProduct: (
      state: IState,
      action: PayloadAction<{ newProduct: Product }>,
    ) => {
      const { newProduct } = action.payload;
      if (state.productsList.length === 0) {
        state.productsList = [...state.productsList, newProduct];
      } else {
        const existingItem = state.productsList.find(
          (product) => product.id === newProduct.id,
        );
        if (existingItem) {
          existingItem.quantity += newProduct.quantity;
          existingItem.totalPrice += newProduct.totalPrice;
        } else {
          state.productsList = [...state.productsList, newProduct];
        }
      }
    },
    decrementFromCart: (state: IState, { payload }: PayloadAction<string>) => {
      const existingItem = state.productsList.find(
        (product) => product.id === payload,
      );
      if (existingItem?.quantity === 1) {
        state.productsList = state.productsList.filter(
          (product) => product.id !== payload,
        );
      } else {
        !!existingItem && existingItem.totalPrice > 0
          ? (existingItem.totalPrice -= existingItem.price)
          : (existingItem.totalPrice = 0);
        !!existingItem && existingItem.quantity--;
      }
    },
    incrementFromCart: (state, { payload }: PayloadAction<string>) => {
      const existingItem = state.productsList.find(
        (product) => product.id === payload,
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
    },
    removeProduct: (state: IState, { payload }: PayloadAction<string>) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== payload,
      );
    },
    removeAllProducts: (state: IState) => {
      state.productsList = [];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  removeAllProducts,
  decrementFromCart,
  incrementFromCart,
} = productsSlice.actions;

export const productsValue = (state: RootState) => state.productsList;
export const selectTotalPrice = (state: RootState) =>
  state.productsList.reduce((acc, cur) => (acc += cur.totalPrice), 0);
export const selectTotalQuantity = (state: RootState) => {
  state.productsList.reduce((acc, cur) => (acc += cur.quantity), 0);
};

export default productsSlice.reducer;
