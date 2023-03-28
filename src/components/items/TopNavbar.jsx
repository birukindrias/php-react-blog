import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { actions_usr } from "../../store/users";
import { IconButton } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";
const TopNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [model, setmodel] = useState(false);
  const [posts, setposts] = useState([]);
  const [searchitem, setsearchitem] = useState("");
  const user =
    useSelector((state) => state.userDataSlice.userData["user"]) ?? false;
  console.log(user.id);
  console.log(user);
  const token = useSelector((state) => state.userDataSlice.token) ?? false;
  console.log('token');
  console.log(token);

  const update = useSelector((state) => state.userDataSlice.update) ?? false;

  const setpostsdata = (data) => {
    dispatch(actions_usr.setpostsdata(data));
  };
  const setUserPost = (data) => {
    dispatch(actions_usr.setUserPost(data));
  };
  const saveUser = (userdata) => {
    dispatch(actions_usr.userDataAdd(userdata));
  };
  const setTheUpdate = (update_val) => {
    dispatch(actions_usr.setTheUpdate(update_val));
  };
  const setPosts = (posts) => {
    dispatch(actions_usr.setPosts(posts));
  };
  const searchResult = (users) => {
    dispatch(actions_usr.searchResult(users));
  };

  const [postValues, setpostValues] = useState({
    user_id: user.id,
    post: "",
    img: {},
  });
  const getUserFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/getuser", {
      token: token,
    });
    saveUser(response.data.data);
  };

  let getPosts = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/posts");
    setPosts(res.data.posts);
    let userPosts = await axios.post("http://localhost:8080/api/v1/userposts", {
      remember_token: token,
    });
    console.log("updated posts userPosts.data.posts");
    setUserPost(userPosts.data.posts);
  };
  let getboth = async () => {
    if (getUserFromBackend()) {
      await getPosts();
    }
  };
  useEffect(() => {
    getboth();
  }, [update]);
  let image = `http://localhost:8080/storage/profile/${
    user.img ? user.img : "def.jpeg"
  }`;

  let postini = `http://localhost:8080/storage/files/blog.png`;

  const logout = () => {
    dispatch(actions_usr.logout());
    navigate("/login");
  };

  //   erorr
  // handle form insertion

  const handleChangepost = (event) => {
    setpostValues({
      ...postValues,
      [event.target.name]: event.target.value,
    });
    if (event.target.files) {
      setpostValues({
        ...postValues,
        img: event.target.files[0],
      });
    }

    console.log(postValues);
  };

  const createPost = async () => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/createpost",
      postValues,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.data) {
      getPosts();

      setTheUpdate(true);
      setTheUpdate(false);
      setTheUpdate(true);
    }
    setmodel(!model);
  };
  //   let imgi = `http://localhost:8080/storage/profile/${user.img}`;

  const openModel = (state) => {
    console.log(model);
    setmodel(!model);
  };

  const handleChange = (event) => {
    setsearchitem(event.target.value);
  };
  const Search = async (e) => {
    if (searchitem != "") {
      e.preventDefault();
      console.log(searchitem);
      const response = await axios.post("http://localhost:8080/api/v1/search", {
        searchuser: searchitem,
      });
      searchResult(response.data.data.users);
      console.log(response.data.data.users);
      setsearchitem("");
      navigate("/users");
    }
  };

  return (
    <div>
      <div className="flex-1 flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
          <ul className="flex items-center">
            <li className="h-10 w-10">
              <Link to="/dashboard">
                {" "}
                <img
                  className="h-full w-full mx-auto"
                  // src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                  src={postini}
                  alt="svelte logo"
                />
              </Link>
            </li>
          </ul>

          <ul className="flex items-center flex-row justify-between">
            <div className="relative flex flex-col w-fit  max-w-[28rem]">
              <form onSubmit={Search}>
                <Input
                  type="text"
                  name="searchitem"
                  placeholder="Search"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  value={searchitem}
                  onChange={handleChange}
                />

                <Button
                  size="sm"
                  // color={email ? "blue" : "blue-gray"}
                  disabled={!searchitem}
                  onClick={Search}
                  className="!absolute right-1 top-1 rounded"
                >
                  Invite
                </Button>
              </form>
            </div>

            {/* <i class="fa-solid fa-circle-plus text-orange-700 w-20 h-20" ></i> */}
            {token ? (
              <>
                <IconButton
                  variant="outlined"
                  className="px-3 ml-4 text-orange-600"
                  onClick={openModel}
                >
                  <i
                    className=" fas fa-circle-plus text-orange-600"
                    onClick={openModel}
                  />
                </IconButton>
                {/* <li>
                  <h1 className="pl-8 px-3 lg:pl-0 text-gray-700">
                    <Link to="/dashboard">Home</Link>
                  </h1>
                </li> */}
                {/* <li>
                  <h1 className="pl-8 px-3 lg:pl-0 text-gray-700">
                    <Link to="/profile">Profile</Link>
                  </h1>
                </li> */}
                {/* <li>
                  <h1
                    className="pl-8 px-3 lg:pl-0 text-gray-700"
                    onClick={logout}
                  >
                    post
                  </h1>
                </li> */}
              </>
            ) : (
              <>
                {/* <li>
                  <h1 className="pl-8  px-3 lg:pl-0 text-gray-700">
                    <Link to="/">Home</Link>
                  </h1>
                </li>
                <li>
                  <h1 className="pl-8 px-3 lg:pl-0 text-gray-700">
                    <Link to="login">login</Link>
                  </h1>
                </li> */}
              </>
            )}
          </ul>

          <ul className="flex items-center">
            {token ? (
              <>
                {" "}
                <li className="pr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </li>
                <li className="h-10 w-10">
                  <Link to="/profile" state={{ id: user.id }}>
                    {" "}
                    <div
                      className="w-10 h-10 bg-cover bg-center  bg-no-repeat rounded-full"
                      img={image}
                      Style={`background-image: url(${image})`}
                    >
                      {/* <img
              className="w-16 h-16 bg-auto bg-center bg-no-repeat rounded-full"
              src={image}
              alt=""
            /> */}
                    </div>
                  </Link>
                </li>
              </>
            ) : (
              <> </>
            )}
          </ul>
        </nav>
      </div>
      {model && (
        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-5 z-10 mx-auto w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                New Post{" "}
              </h3>
              <button
                onClick={openModel}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6 ">
              <div className="w-full px-2 py-2  flex flex-col align-bottom gap-2 justify-between h-fit">
                <Textarea
                  label="post"
                  name="post"
                  value={postValues.post}
                  onChange={handleChangepost}
                />
                <Input
                  label="Title"
                  name="title"
                  type="text"
                  value={postValues.title}
                  onChange={handleChangepost}
                />
                <Input
                  label="Image"
                  icon={<i className="fas fa-image" />}
                  name="img"
                  type="file"
                  onChange={handleChangepost}
                />
                {/* <UploadComponent /> */}
                {/* <img src="http://localhost:8080/filea/img/7444Screenshot_2023-03-09_16_49_23.png"/> */}

                <Button
                  type="submit"
                  onClick={() => {
                    createPost();
                  }}
                >
                  post
                </Button>
              </div>
            </div>
            {/* <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  I accept
                </button>
                <button
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Decline
                </button>
              </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;
