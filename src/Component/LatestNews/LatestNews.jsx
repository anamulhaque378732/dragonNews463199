import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2">
      <p className="text-base-100 rounded-xl bg-secondary px-3 py-2">
        Latest News
      </p>
      <Marquee className="flex gap-6" speed={60} pauseOnHover={true}>
        <p className="font-bold">Lorem ipsum dolor sit amet, consectetur</p>{" "}
        <p className="font-bold">Lorem ipsum, dolor sit amet consectetur</p>
        <p className="font-bold">Lorem ipsum, dolor sit amet consectetur</p>
        <p className="font-bold">Lorem ipsum, dolor sit amet consectetur</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
