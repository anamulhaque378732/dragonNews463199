import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { loginUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.message);
        // alert(err.message);
      });
  };
  return (
    <div className="flex justify-center   ">
      <div className="card bg-base-100  py-5 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-center text-2xl mt-2 font-bold">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn bg-base-300 mt-4">
              Login
            </button>
          </form>
          {error && <p className="text-red-300 text-xs"> {error}</p>}
          <div className="pt-5">
            <p className="text-semibold text-center">
              Don't have an account ?,
              <Link to="/auth/register" className="text-red-400">
                {" "}
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
