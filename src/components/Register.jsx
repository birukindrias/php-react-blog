import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Signup } from "../axios";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (dispatch(Signup(username, email, password))) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Signup</button>
    </form>
  );
}
export default Register;
