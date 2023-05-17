import { configureStore } from "@reduxjs/toolkit";
import CounterSliceReducer from "./CounterSlice";
import AuthSliceReducer from "./AuthSlice";

const store = configureStore({
  reducer: {
    counterreducer: CounterSliceReducer,
    auth: AuthSliceReducer,
  },
});
export default store;
