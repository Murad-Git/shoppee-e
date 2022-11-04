import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';
import productsSlice from '@/store/productsSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== `undefined`
    ? createWebStorage(`local`)
    : createNoopStorage();

const persistConfig = {
  key: `root`,
  storage,
};
const persistedReducer = persistReducer(persistConfig, productsSlice);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);

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
