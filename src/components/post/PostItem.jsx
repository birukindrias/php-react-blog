import { HeartIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function PostItem({ post, index, img, title, postid, userid }) {
  const location = useLocation();
  const [likes, setlikes] = useState([]);
  const user = useSelector((state) => state.auth.user);
  let imagevar = img ? img : "post.png";
  console.log("imagevar");
  console.log(img);
  let imgi = `https://reactphp.biruksoftware.com/storage/post_images/${imagevar}`;

  const like = async () => {
    let res = await axios.post(
      "https://reactphp.biruksoftware.com/api/v1/like",
      {
        post_id: postid,
        user_id: user["id"],
        litem: 1,
      }
    );
    console.log(res);
  };
  const getlike = async () => {
    let res = await axios.get("https://reactphp.biruksoftware.com/api/v1/like");
    setlikes(res.data.likes);
    if (res) {
      setlikes(res.data.likes);
    }
  };
  useEffect(() => {
    getlike();
  }, []);
  console.log(likes);

  return (
    <Card key={index} className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img src={imgi} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
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
        <Link to="/postitem" state={{ id: postid }}>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              {/* <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0 */}
            </Typography>
          </div>
          <Typography color="gray">{post}</Typography>
        </Link>

        <div className="group w-full mt-8 inline-flex flex-wrap justify-between items-center gap-3">
          <Tooltip content={`65" HDTV`}>
            <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-blue-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
              {/* <TvIcon className="h-5 w-5" /> */}
            </span>
          </Tooltip>
          <div className="flex flex-row " onClick={like}>
            <Tooltip content="Fire alert">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-red-500/5 p-3 text-red-500 transition-colors hover:border-red-500/10 hover:bg-red-500/10 hover:!opacity-100 group-hover:opacity-70">
                {/* <FireIcon className="h-5 w-5" /> */}
              </span>
            </Tooltip>
            <Tooltip content="And +20 more">
              <span className="cursor-pointer rounded-full border border-blue-500/5 bg-blue-500/5 p-3 text-gray-500 transition-colors hover:border-blue-500/10 hover:bg-blue-500/10 hover:!opacity-100 group-hover:opacity-70">
                {likes?.map((m) => {
                  console.log("postid");
                  console.log(postid);
                  let o = 1;
                  console.log(m.post_id == postid ? o++ : "0");
                  console.log("value of o:" + o);
                  m.post_id === postid ? o++ : "0";
                  return o;
                })}
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
