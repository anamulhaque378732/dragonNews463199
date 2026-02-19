import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find us one</h2>
      <div>
        <div className="join join-vertical w-full ">
          <button className="btn join-item w-full justify-start  bg-base-100">
            {" "}
            <FaFacebookF />
            FaceBook
          </button>
          <button className="btn  justify-start bg-base-100 join-item w-full">
            {" "}
            <FaTwitter />
            Twitter
          </button>
          <button className="btn justify-start bg-base-100 join-item w-full">
            {" "}
            <FaInstagramSquare />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
