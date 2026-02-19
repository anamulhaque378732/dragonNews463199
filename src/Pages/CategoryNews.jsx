import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Component/NewsCard/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true,
      );

      setCategoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      // console.log(filterNews);

      setCategoryNews(filterNews);
    }
  }, [id, data]);
  // let categoryNews;

  // if (id === "0") {
  //   categoryNews = data;
  // } else if (id == "1") {
  //   categoryNews = data.filter((news) => news.others.is_today_pick === true);
  // } else {
  //   categoryNews = data.filter((news) => news.category_id == id);
  // }
  return (
    <div className="grid grid-cols-1 gap-5">
      {categoryNews &&
        categoryNews.map((news) => <NewsCard key={news.id} news={news} />)}
    </div>
  );
};

export default CategoryNews;
