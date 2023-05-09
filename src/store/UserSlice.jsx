import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    users: [],
    user: null,
    token: localStorage.getItem("token") ?? false,

    loading: false,
    error: null,
  },
  reducers: {
    getUserStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    searchResult(state, action) {
      console.log("sadfsdf");
      console.log(action.payload);
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },
    getUserFailure(state, action) {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout(state, action) {
      state.loading = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { getUserStart,logout, searchResult,getUserSuccess, getUserFailure } =
  userSlice.actions;

export default userSlice;
