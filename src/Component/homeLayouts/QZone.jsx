import swimming from "../../assets/swimming.png";
import room from "../../assets/class.png";
import play from "../../assets/playground.png";

const QZone = () => {
  return (
    <div>
      <h2 className="font-bold mb-5 p-2 bg-base-200">Q Zone</h2>
      <div className="space-y-5">
        <img src={swimming} alt="" />
        <img src={room} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default QZone;
