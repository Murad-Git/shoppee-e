import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import productsSlice from '@/store/productsSlice';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import thunk from 'redux-thunk';
import filterSlice from './filterSlice';

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

const migrations: any = {
  0: (state: RootState) => {
    return {
      ...state,
      filterSlice: {
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
      },
    };
  },
  // 1: (state: RootState) => {
  //   return {
  //     state
  //   }
  // }
};
const persistConfig = {
  key: `root`,
  storage,
  version: 0,
  // stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, { debug: true }),
};
const rootReducer = combineReducers({
  productsSlice,
  filterSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

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
