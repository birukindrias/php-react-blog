import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    userData: [localStorage.getItem("user")],
    users: [],
    otherUser: [],
    otherUserPost: [],
    userPost: [],
    posts: [],
    update: "false",
    token: localStorage.getItem("token") ?? null,
  },
  reducers: {
    userDataAdd(state, action) {
      state.userData = action.payload;
      localStorage.setItem("user",JSON.stringify(action.payload['user']));
      const user = localStorage.getItem("user");
      const useri =action.payload["user"];
      localStorage.setItem("oo", useri);
      const usera = localStorage.getItem("oo");


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
      state.otherUser = action.payload;
      return;
    },
    setOthorUserPosts(state, action) {
      state.otherUserPost = action.payload;
      return;
    },
    setPosts(state, action) {
        
        state.posts = action.payload;
        sessionStorage.setItem("key",JSON.stringify(action.payload));
        localStorage.setItem("key",JSON.stringify(action.payload));
        sessionStorage.setItem("ke", "value");
  
        const val =JSON.parse( sessionStorage.getItem("key"));
        const vale = JSON.parse( localStorage.getItem("key"));
      //   const vael = localStorage.getItem("key");
      for (let index = 0; index < val.length; index++) {
        console.log(val[0]['pid'])
        console.log("val.pid")
        console.log(val.pid)

        // const element = array[index];
        
      }
      val.map ((e)=>{

      })
        console.log(val)
        console.log('val')
        console.log(vale)
      return;
    },
    signinUser(state) {
      let token = state.userData["token"];
      state.token = token;
      localStorage.setItem("token", token);

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
