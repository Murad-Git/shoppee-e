import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
// import products from '@/store/productsSlice';
import productsSlice from '@/store/productsSlice';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// const combinedReducer = combineReducers({
//   [productsSlice.name]: productsSlice,
// });

// const masterReducer = (state, action: AnyAction) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload,
//     };
//     return nextState;
//   } else {
//     return combinedReducer(state, action);
//   }
// };

// const store = () => {
//   return configureStore({
//     reducer: masterReducer,
//   });
// };
export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});

// export type State = ReturnType<typeof productsSlice>;
// export type AppStore = ReturnType<typeof store>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;
// type Store = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// assigning store to next wrapper
// export const wrapper = createWrapper<AppState>(store);
// export default store;
