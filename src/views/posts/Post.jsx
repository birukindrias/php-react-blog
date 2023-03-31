import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const location = useLocation();
  const [likes, setlikes] = useState([])

  const id = location.state.id;
  const [posts, setPosts] = useState([]);
  const getpost = async () => {
    const id = location.state.id;
    console.log(id);

    const oposts = await axios.post("http://localhost:8080/api/v1/post", {
      id: id,
    });
    console.log(oposts);

    setPosts(oposts.data.posts[0]);
  
    if (posts) {
        console.log("oposts.data.possssts");
        console.log(oposts.data.posts[0]);
      console.log("posts");
      console.log(posts.img);
      console.log(post);
      console.log("post");
      
  }
  };
  useEffect(() => {
    getpost();
  }, []);
  
  let img = posts.img;
  let username = posts.username;
  let title = posts.title;
  let post = posts.post;
//   let uid = posts.user/;/
  let user_id = posts.user_id;
  let imagevar = img ? img : "post.png";
  let imagevare = img ? img : "def.jpeg";
  let imgi = `http://localhost:8080/storage/post_images/${imagevar}`;
  let imgu = `http://localhost:8080/storage/profile/${imagevare}`;
  const like = async () => {
    let res = await axios.post("http://localhost:8080/api/v1/like", {
      post_id: userid,
      user_id: postid,
      litem: 1,
    });
    console.log(res);
  };
  return (
    <Card className="w-full min-w-[26rem] shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img src={imgi} className="w-full" alt="ui/ux review check" />
          <div className="to-bg-black-10 absolute inset-0 h-16 w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            color="red"
            variant="text"
            className="!absolute top-4 right-4 rounded-full"
          >
            <HeartIcon className="h-6 w-6" />
          </IconButton>
        </CardHeader>
        <CardBody>
        <Link to="/userprofile" state={{ id: user_id }}>

          <img src={imgu} className="w-11 h-11 rounded-full" alt="ui/ux review check" />

            {username}
            </Link>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0
            </Typography>
          </div>
          <Typography color="gray">{post}</Typography>
          <div className="group w-full mt-8 inline-flex flex-wrap justify-between items-center gap-3">
            <Tooltip content={`65" HDTV`}>
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                <TvIcon className="h-5 w-5" />
              </span>
            </Tooltip>
            <div className="flex flex-row " onClick={like}>
              <Tooltip content="Fire alert">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-red-500/5 p-3 text-red-500 transition-colors hover:border-red-500/10 hover:bg-red-500/10 hover:!opacity-100 group-hover:opacity-70">
                  <FireIcon className="h-5 w-5" />
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
            </div>
          </div>
        </CardBody>
      {/* <CardFooter className="pt-3">
            <Button size="lg" fullWidth={true}>
              Reserve
            </Button>
          </CardFooter> */}
    </Card>
  );
}
