// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// // import type { AppDispatch, RootState } from '@/store/store';

// // export const useAppDispatch = () => useDispatch<AppDispatch>();
// // export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// import type { AppState, AppStore } from '@/store/store';

// export const useAppDispatch = () => useDispatch<AppState>();
// export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
