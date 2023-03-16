import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        userData: [],
    },
    reducers: {
        userDataAdd(state, action) {
            state.userData = action.payload;
            // state.userData = a;
        },
        signinUser(state, action) {
            let token = state.userData['token'];
            localStorage.setItem("token", token);
            console.log(token);

            return state;
        },
    },
});

export const actions_usr = userSlice.actions;
export default userSlice;