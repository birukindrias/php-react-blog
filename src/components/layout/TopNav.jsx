import { Button, IconButton, Input } from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { searchUser } from "../../axios";

function TopNav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token) ?? null;
  const user = useSelector((state) => state.auth.user) ?? null;
  const Search = async (e) => {
    e.preventDefault();

    dispatch(searchUser({ search_user: e.target.search_item.value }));
    navigate("/users");
  };
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <nav className="px-4 flex justify-between bg-white h-16 border-b-2">
          <ul className="flex items-center">
            <li className="h-10 w-10">
              <Link to="/home">
                <img
                  className="h-full w-full mx-auto"
                  // src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                  src={`https://web.biruksoftware.com/storage/files/blog.png`}
                  alt=" logo"
                />
              </Link>
            </li>
          </ul>

          <ul className="flex items-center flex-row justify-between">
            <div className="relative flex flex-col w-fit  max-w-[28rem]">
              <form onSubmit={Search}>
                <Input
                  type="text"
                  name="search_item"
                  placeholder="Search"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                  // value={search_item}
                  // onChange={handleChange}
                />

                <Button
                  size="sm"
                  color={token ? "blue" : "blue-gray"}
                  className="!absolute right-1 top-1 rounded"
                >
                  Invite
                </Button>
              </form>
            </div>
            {token ? (
              <Link to="/create">
                <IconButton
                  variant="outlined"
                  className="px-3 ml-4 text-orange-600"
                >
                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVklEQVR4nO1ZvW4TQRBeQaCgJFDx8xIRUVK5Q5F20MwVJxD0vAIojbuEPkROxBsY3YzkAA0FzwCCB4CkIj91jgY0Z8cSVpD3btd3e+g+aSVLJ9vfNzuz+82cMR06dPBGOkyvAtO6FdwEwcwyfQOmMxD8VSymM8v0tXgmuPkoS9b6/f4V0zRQ8B4wvQKmIxD6XW7hoRXc3siSu7UT3ximt0Fo3wrm5Yn/vaxgbgUHMIJbtZAHwacgeOpL/BIhJzZLniyM+Mr+82uW6U1o4jArhGlP/ysoeRjBDSv4YdHk4WIxvdf/DBf5OsnLVMTHdJhe9xZQR9rAv+ti4Ec+S541RR6mCx9XIk9My5bpOAIBp5WOWD3nmydP41Ri2i1FXm9H30tqFp61kMMI7rtHX+2BZ9RCCoCxiG0n8mqy1KfEJgCYjtQ0ukR/PUTeBhcgRS2szhUwtsRxCgCmly47wBELeDt/B4rGI1oBX+bvQAmrHArgXgPHLjWQxyoAmM7/fwHQ+hTithcxt/0YlXgvMiv4Yq4AHTrFKgCy5IGTmbNMP2ITYJm+O0/z1LrGJgAEt0xbGxpgOrcH9o6zgMkuDILkbZCFO6YsHg7TmzE09VbwpPLcVGeVjQvgJK1EfiqCaa/B6L82vtA+1DJJA3n/rvept2RCQAetxcC1vsgfBBvuzgx5B3WkTS9U5C+DzioXczrhT++CLTk33dULxps462/gjh7bpm7o7ai2o4p3Gn8Ht0rfsIvAxACu6txGPbs2HtrZTV7g5cVnps/6TC2xusooXrN26GDajz+jYGvHi7pQwQAAAABJRU5ErkJggg=="/>

{/*                   <i className="fas fa-circle-plus text-orange-600" /> */}
                </IconButton>
              </Link>
            ) : (
              ""
            )}
          </ul>

          <ul className="flex items-center">
            {token ? (
              <li className="h-10 w-10">
                <Link to="/profile">
                  <img
                    className="h-full w-full mx-auto rounded-lg"
                    // src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                    src={`https://web.biruksoftware.com/storage/profile/${
                      user["img"] ? user["img"] : "def.jpeg"
                    }`}
                    alt="profile logo"
                  />
                </Link>
              </li>
            ) : (
              <>
                {/* <Link to="/login" state={{ id: user["id"] }}>
                    <h1 className="pl-8 px-3 lg:pl-0 text-gray-700">Login</h1>
                  </Link> */}
                <div className="w-1/2 p-1  flex flex-row">
                  <li className="mr-2">
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/Signup">Signup</Link>
                  </li>
                </div>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TopNav;
