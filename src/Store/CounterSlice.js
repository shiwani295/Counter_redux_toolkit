import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = {
  counter: 0,
  showcounter: true,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState: initialExpenseState,
  reducers: {
    incrementby5: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    increment: (state) => {
      state.counter = state.counter + 1;
    },
    incrementby2: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decrement: (state) => {
      state.counter = state.counter - 1;
      console.log(state.counter);
    },
    decrementby2: (state, action) => {
      state.counter = state.counter - action.payload;
    },
  },
});
//action
export const counterAction = CounterSlice.actions;
//reducer
export default CounterSlice.reducer;
