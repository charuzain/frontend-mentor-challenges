import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  transaction: [],
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.value = state.value + action.payload;
      state.transaction.push({
        type: 'deposit',
        amount: action.payload,
        date: new Date().toLocaleString(),
      });
    },
    withdraw: (state, action) => {
      state.value = state.value - action.payload;
      state.transaction.push({
        type: 'withdraw',
        amount: action.payload,
        date: new Date().toLocaleString(),
      });
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;
export default balanceSlice.reducer;
