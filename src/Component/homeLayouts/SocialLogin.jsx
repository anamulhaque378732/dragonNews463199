import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold  mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline    hover:bg-secondary  w-full">
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
