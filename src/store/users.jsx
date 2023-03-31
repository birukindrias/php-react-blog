import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: [localStorage.getItem("user")],
    users: [],
    ouser: [],
    userPost: [],
    posts: [],
    update: "false",
    token: localStorage.getItem("token") ?? null,
  },
  reducers: {
    userDataAdd(state, action) {
      state.userData = action.payload;
      localStorage.setItem("user", action.payload);
      console.log("action.payload");
      console.log(action.payload);
      console.log(action.payload["user"]);
      const user = localStorage.getItem("user");
      const useri =action.payload["user"];
      console.log("user");
      console.log(user[0]);
      console.log("oooo");
      localStorage.setItem("oo", useri);
      const usera = localStorage.getItem("oo");

      console.log('useri');
      console.log(useri);
      console.log(usera[0]);

      // state.userData = a;
    },
    searchResult(state, action) {
      state.users = action.payload;
      return;
    },
    setUserPost(state, action) {
      state.userPost = action.payload;
      return;
    },
    setOthorUser(state, action) {
      state.ouser = action.payload;
      return;
    },
    setPosts(state, action) {
      state.posts = action.payload;
      return;
    },
    signinUser(state) {
      let token = state.userData["token"];
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
      localStorage.removeItem("user");
      return state;
    },
  },
});

export const actions_usr = userSlice.actions;
export default userSlice;
