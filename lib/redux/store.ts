/* Core */
import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from 'react-redux';

/* Instruments */
import { reducer } from './rootReducer';
import { middleware } from './middleware';

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['screen'],
  blacklist: ['next-router', 'app', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleware);
  },
  devTools:
    process.env.NODE_ENV !== 'production'
      ? {
          name: 'MyApp',
        }
      : false,
});
export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
