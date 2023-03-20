import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./posts";
import userSlice from "./users";


export const store = configureStore({
    reducer: {
        userDataSlice: userSlice.reducer,
        postDataSlice: postSlice.reducer,
    },



});