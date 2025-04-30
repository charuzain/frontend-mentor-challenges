import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './slice';
export const store = configureStore({
  reducer: {
    balance:balanceReducer,
  },
});
