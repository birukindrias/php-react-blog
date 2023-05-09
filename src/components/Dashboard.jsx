import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Profile } from "./users/Profile";
// import { fetchUserData } from "../store/Slice";

function Dashboard() {
  const user = useSelector((state) => state.auth.user) ?? false;
console.log(user);

  // useEffect(() => {
  //   dispatch(fetchUserData());
  // }, [dispatch]);

  return (
    <div>
    
      <Profile/>
    </div>
  );
}
export default Dashboard;
