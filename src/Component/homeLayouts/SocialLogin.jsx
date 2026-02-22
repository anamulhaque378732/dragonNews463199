import { GoogleAuthProvider } from "firebase/auth";
import { use } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, setUser } = use(AuthContext);
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    googleLogin(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2 className="font-bold  mb-5">Login With</h2>
      <div className="space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline    hover:bg-secondary  w-full"
        >
          {" "}
          <FaGoogle size={24} /> Login With Google{" "}
        </button>
        <button className="btn  hover:bg-secondary text-primary  btn-outline w-full">
          {" "}
          <FaGithub size={24} /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
