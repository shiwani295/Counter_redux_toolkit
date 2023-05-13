import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    counterreducer: CounterSliceReducer,
  },
});
export default store;
