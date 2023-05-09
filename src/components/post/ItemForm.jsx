import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  createStart,
  createSuccess,
  createFailure,
} from "../../store/resourceSlice";
import { post } from "../../axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

function ItemForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [postValues, setpostValues] = useState({
    user_id: user["id"],
  });
  // setpostValues({ "user_id": user["id"] });
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
  const createPost = async (event) => {
    // event.preventDefault()
    // console.log(event.target.title.name);
    setTimeout(async () => {
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
        navigate("/home");
        // getPosts();

        // setTheUpdate(true);
        // setTheUpdate(false);
        // setTheUpdate(true);
      }
    }, 2);

    // setmodel(!model);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   dispatch(post({post:name,user_id:user['id']}));
  // };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input type="text" name="name" />
    //   <button type="submit">Create</button>
    // </form>
    <div>
      <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:pt-5 md:mt-5 mt-20 z-10 mx-auto  w-full h-full max-w-2xl md:h-auto  ">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              New Post{" "}
            </h3>
            {/* <button
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
            </button> */}
          </div>
          <div className="p-6 space-y-6 ">
            <div className="w-full px-2 py-2  flex flex-col align-bottom gap-2 justify-between h-fit">
              {/* <form onSubmit="createPost"> */}
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
              <Button type="submit" onClick={createPost}>
                post
              </Button>
              {/* </form>{" "} */}
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
    </div>
  );
}

export default ItemForm;
