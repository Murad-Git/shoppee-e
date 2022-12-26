import { Product } from '@/types/main';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { RootState } from './store';

const getDarkMode = () => {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(prefers-color-scheme: dark)`).matches;
  } else {
    return false;
  }
};

type IState = {
  productsList: Product[];
  likedProducts: Product[];
  darkMode: boolean;
};

const initialState: IState = {
  productsList: [],
  likedProducts: [],
  darkMode: getDarkMode(),
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
      if (state.productsList?.length && state.productsList?.length === 0) {
        state.productsList = [...state.productsList, newProduct];
      } else {
        const existingItem =
          state.productsList?.find((product) => product.id === newProduct.id) ||
          false;

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
      if (state.likedProducts?.length && state.likedProducts?.length === 0) {
        state.likedProducts = [...state.likedProducts, payload.product];
      } else {
        const existingItem =
          state.likedProducts?.find(
            (product) => product.id === payload.product.id,
          ) || false;
        if (existingItem) {
          state.likedProducts = state.likedProducts.filter(
            (item) => item.id !== payload.product.id,
          );
        } else {
          state.likedProducts = [...state.likedProducts, payload.product];
        }
      }
    },
    darkMode(state) {
      state.darkMode = !state.darkMode;
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
  darkMode,
} = productsSlice.actions;

export const productsValue = (state: RootState) =>
  state.productsSlice.productsList;
export const selectTotalPrice = (state: RootState) => {
  if (state.productsSlice.productsList.length) {
    return state.productsSlice.productsList?.reduce(
      (acc, cur) => (acc += cur.totalPrice),
      0,
    );
  } else {
    return 0;
  }
};

export const selectTotalQuantity = (state: RootState) => {
  if (state.productsSlice.productsList.length) {
    return state.productsSlice.productsList?.reduce(
      (acc, cur) => (acc += cur.quantity),
      0,
    );
  } else {
    return 0;
  }
};

export default productsSlice.reducer;
