import { Product } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { RootState } from './store';
// import { AppState, State } from './store';
// import { RootState } from './store';

type IState = {
  productsList: Product[];
  likedProducts: Product[];
};

const initialState: IState = {
  productsList: [],
  likedProducts: [],
};

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
      state.productsList.find((product) => {
        if (product.id === payload && product.quantity === 1) {
          state.productsList = state.productsList.filter(
            (product) => product.id !== payload,
          );
        }
        if (product.id === payload && product.quantity > 1) {
          !!product && product.totalPrice > 0
            ? (product.totalPrice -= product.price)
            : (product.totalPrice = 0);
          !!product && product.quantity--;
        }
      });
    },
    incrementFromCart: (state, { payload }: PayloadAction<string>) => {
      state.productsList.find((product) => {
        if (product.id === payload) {
          product.quantity++;
          product.totalPrice += product.price;
        }
      });
    },
    removeProduct: (state: IState, { payload }: PayloadAction<string>) => {
      state.productsList = state.productsList.filter(
        (product) => product.id !== payload,
      );
    },
    removeAllProducts: (state: IState) => {
      state.productsList = [];
    },
    toggleLikedProduct: (
      state: IState,
      { payload }: PayloadAction<{ product: Product }>,
    ) => {
      if (state.likedProducts.length === 0) {
        state.likedProducts = [...state.likedProducts, payload.product];
      } else {
        const existingItem = state.likedProducts.find(
          (product) => product.id === payload.product.id,
        );
        if (existingItem) {
          state.likedProducts = state.likedProducts.filter(
            (item) => item.id !== payload.product.id,
          );
        } else {
          state.likedProducts = [...state.likedProducts, payload.product];
        }
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  removeAllProducts,
  decrementFromCart,
  incrementFromCart,
  toggleLikedProduct,
} = productsSlice.actions;

export const productsValue = (state: RootState) =>
  state.productsSlice.productsList;
export const selectTotalPrice = (state: RootState) =>
  state.productsSlice.productsList.reduce(
    (acc, cur) => (acc += cur.totalPrice as number),
    0,
  );
export const selectTotalQuantity = (state: RootState) => {
  state.productsSlice.productsList.reduce(
    (acc, cur) => (acc += cur.quantity),
    0,
  );
};

export default productsSlice.reducer;
