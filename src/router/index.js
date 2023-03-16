import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import HomePage from "../components/user/HomePage";
import { Posts } from "../views/posts/Posts";
import { Dashboard } from "../views/users/Dashboard";

export const Main = () => (
  <Routes>
    <Route exact path="/" element={<Register />}>
      {" "}
    </Route>{" "}
    <Route exact path="/home" element={<HomePage />}>
      {" "}
    </Route>
    <Route
      path="/login"
      element={<Login onLogin={() => setIsLoggedIn(true)} />}
    />
    <Route path="/profile" element={<Profile />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/blogs" element={<Posts />} />
  </Routes>
);
