import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "Authentoication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      console.log(state);
    },
    logout(state) {
      state.isAuthenticated = false;
      console.log(state);
    },
  },
});

export const AuthSliceAction = AuthSlice.actions;

export default AuthSlice.reducer;
