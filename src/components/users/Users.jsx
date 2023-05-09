import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Users() {
  let user = useSelector((state) => state.user.users);
  let usser = useSelector((state) => state.auth.user);
  console.log("user");
  console.log(user);
  console.log(usser);

  return (
    <>
      <div className="flex gap-3 justify-center flex-wrap">
        {user? user.map((post, index) => (
              <Card
                shadow={false}
                className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
              >
                <Link to="/userprofile" state={{ id: post.id }}>
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[url(http://localhost:8080/storage/files/post.png)] bg-cover bg-center`}
                  >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 font-medium leading-[1.5]"
                    >
                      {post.bio}{" "}
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-gray-400">
                      {post.username}{" "}
                    </Typography>
                    <Avatar
                      size="xl"
                      variant="circular"
                      alt="candice wu"
                      className="border-2 border-white"
                      //   src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      src={`http://localhost:8080/storage/profile/${
                        
                        post.pimg ? post.pimg : "def.jpeg"
                      }`}
                    />
                  </CardBody>
                </Link>
              </Card>
            ))
          : "no user found"}
      </div>
    </>
  );
}
