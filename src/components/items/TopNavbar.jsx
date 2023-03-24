import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { actions_usr } from "../../store/users";
import { Input, Button } from "@material-tailwind/react";
const TopNavbar = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.userDataSlice.token);
  const navigate = useNavigate();
  const saveUser = (userdata) => {
    dispatch(actions_usr.userDataAdd(userdata));
  };
  const userValue =
    useSelector((state) => state.userDataSlice.userData["user"]) ?? false;
  const [searchitem, setsearchitem] = useState("");
  let token = useSelector((state) => state.userDataSlice.token);
  let imagevar = userValue.img ? userValue.img : "def.jpeg";
  let imgi = `http://localhost:8080/storage/profile/${imagevar}`;
  let postini = `http://localhost:8080/storage/files/blog.png`;

  //   let imgi = `http://localhost:8080/storage/profile/${userValue.img}`;

  const getUserFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/getuser", {
      token: user,
    });

    console.log("the data");
    console.log(response.data.data);
    saveUser(response.data.data);
  };
  console.log(searchitem);

  const handleChange = (event) => {
    console.log("   asdfklsa");
    console.log(searchitem);
    setsearchitem(event.target.value);
    console.log(searchitem);
  };
  const Search = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/search", {
      searchuser: searchitem,
    });

    console.log("the data");
    console.log(response.data.data);
  };
  //   const pageAccessedByReload =
  //     (window.performance.navigation &&
  //       window.performance.navigation.type === 1) ||
  //     window.performance
  //       .getEntriesByType("navigation")
  //       .map((nav) => nav.type)
  //       .includes("reload");

  //   alert(pageAccessedByReload);
  useEffect(() => {
    getUserFromBackend();
  }, []);
  const logout = () => {
    dispatch(actions_usr.logout());
    navigate("/login");
    navigate("/login");
    console.log(token);
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
            <div className="relative flex w-full max-w-[24rem]">
       
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
                // disabled={!searchitem}
                onClick={Search}
                className="!absolute right-1 top-1 rounded"
              >
                Invite
              </Button>
            </div>
            {user ? (
              <>
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
                <li>
                  <h1 className="pl-8  px-3 lg:pl-0 text-gray-700">
                    <Link to="/">Home</Link>
                  </h1>
                </li>
                <li>
                  <h1 className="pl-8 px-3 lg:pl-0 text-gray-700">
                    <Link to="login">login</Link>
                  </h1>
                </li>
              </>
            )}
          </ul>

          <ul className="flex items-center">
            {user ? (
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
                  <Link to="/profile">
                    {" "}
                    <img
                      className="h-full w-full rounded-full mx-auto"
                      src={imgi}
                      alt="pic"
                    />
                  </Link>
                </li>
              </>
            ) : (
              <> </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNavbar;
