import { Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
// import About from "./About";
// import Contact from "./Cosdfntact";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import ItemForm from "./components/post/ItemForm";
import Users from "./components/users/Users";

function App() {
  const token = useSelector((state) => state.auth.token) ?? null;
  console.log(token);

  return (
    <div>
      <Layout>
        <nav>
          <ul></ul>
        </nav>

        <Routes>
          {token ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/create" element={<ItemForm />} />

              <Route path="/profile" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users />} />

              <Route path="/Signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
