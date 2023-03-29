import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: "postData",
    initialState: {
        postData: [],
    },
    reducers: {
        postDataAdd(state, action) {
            state.postData = action.payload;
            // state.postData = a;
        },
        signinUser(state, action) {
            let token = state.postData['token'];
            localStorage.setItem("token", token);
            console.log(token);

            return state;
        },
    },
});

export const actions_post = postSlice.actions;
export default postSlice;