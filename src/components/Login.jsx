import { useDispatch } from "react-redux";
import { login } from "../axios";

function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;

