import Marquee from "react-fast-marquee";

const LatestNews = ({ data }) => {
  const latestNews = data.filter((news) => news.others.is_trending === true);

  // const sliceNews = latestNews.silce(0, 10);
  return (
    <div className="flex items-center rounded-2xl gap-3 bg-base-200 p-2">
      <p className="text-base-100 rounded-xl bg-secondary px-3 py-2">
        Latest News
      </p>
      <Marquee className="flex gap-6" speed={60} pauseOnHover={true}>
        {latestNews.map((item) => (
          <p className="ml-10" key={item.id}>
            {item.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
