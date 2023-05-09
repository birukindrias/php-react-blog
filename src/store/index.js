import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice.jsx";
import userSlice from "./UserSlice.jsx";
import resourceSlice from "./resourceSlice.jsx";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: userSlice.reducer,
    resource: resourceSlice,
  },
});

export default store;
