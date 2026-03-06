import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center gap-4 flex-col items-center">
      <img className="w-[450px]" src={logo} alt="" />
      <p className="text-2xl text-accent"> Journalism Without Fear or Favour</p>
      <p className="text-semibold text-xl">
        {format(new Date(), "EEEE, do MMMM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
