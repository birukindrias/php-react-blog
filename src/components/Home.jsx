import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../axios";
import ItemList from "./post/ItemList";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const items = useSelector((state) => state.resource.items);
  // console.log(items);
  // if (!user) {
  //   return <div>You must be logged in to view this page.</div>;
  // }

  return (
    <div>
      {user ? (
        <ItemList />
      ) : (
        <>
          <div>
            <section className="mb-40">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover"
                Style="
        background-position: 50%;
        background-image: url('https://source.unsplash.com/random/?city,night');
        height: 500px;
      "
              >
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  Style="background-color: rgba(0, 0, 0, 0.75)"
                >
                  <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white px-6 md:px-12">
                      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                        The best offer on the market <br />
                        <span>for your business</span>
                      </h1>
                      <Link to="/login">
                        <button
                          type="button"
                          className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                        >
                          Get started
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="-mt-32">
            <div className="w-full text-center">Leatest Articles</div>
            <ItemList />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
