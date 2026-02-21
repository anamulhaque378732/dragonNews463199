import { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((err) => {
            const error = err.message;
            setUser(user);
          });
      })
      .catch((err) => {
        const error = err.message;
        alert(err.message);
      });
    // console.log(name, photoUrl, email, password);
  };

  return (
    <>
      {" "}
      <div className="flex justify-center   ">
        <div className="card bg-base-100  py-5 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-center text-2xl mt-2 font-bold">
            Register your account
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Type your name"
              />
              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                className="input"
                placeholder="Photo URL"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn bg-base-300 mt-4">
                Register
              </button>
            </form>
            <div className="pt-5">
              <p className="text-semibold text-center">
                Already have an account , please login
                <Link to="/auth/login" className="text-red-400">
                  {" "}
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
