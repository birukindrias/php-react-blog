import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userData",
    initialState: {
        userData: [localStorage.getItem("user")],
        users: [],
        update: 'false',
        token: localStorage.getItem("token"),
    },
    reducers: {
        userDataAdd(state, action) {
            state.userData = action.payload;
            localStorage.setItem("user", {
                user: action.payload
            });

            // state.userData = a;
        },
        searchResult(state, action) {
            state.users = action.payload;
            return
        },
        signinUser(state) {
            let token = state.userData['token'];
            state.token = token;
            localStorage.setItem("token", token);
            console.log(token);


            return state;
        },
        setTheUpdate(state, action) {

            state.update = action.payload;


            return state;
        },
        logout(state) {
            state.userData = [];
            state.token = false;
            localStorage.removeItem("token");
            return state;
        },
    },
});

export const actions_usr = userSlice.actions;
export default userSlice;