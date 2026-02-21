import { Link, NavLink } from "react-router";
import userLogo from "../../assets/user.png";
import { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        alert("logUot");
      })
      .catch((err) => {
        const error = err.message;
      });
  };

  return (
    <div className="flex  justify-between items-center">
      <div className="text-green-500"> {user && user.email} </div>
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
