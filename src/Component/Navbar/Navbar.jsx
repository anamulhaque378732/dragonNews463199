import { Link, NavLink } from "react-router";
import userLogo from "../../assets/user.png";
import { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [error, setError] = useState("");

  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((err) => {
        const error = err.message;
        setError(error);
      });
  };

  return (
    <div className="flex  justify-between items-center">
      <div className="text-green-500">
        {" "}
        {user && user.email} {error}{" "}
      </div>
      <div className="nav flex gap-5 text-accent ">
        <NavLink to="/"> Home</NavLink> <NavLink to="/about"> About</NavLink>{" "}
        <NavLink to="/career"> Career</NavLink>{" "}
      </div>
      <div className="login-btn flex gap-4">
        {" "}
        <img src={`${user ? user.photoURL : userLogo}`} alt="" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-10">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
