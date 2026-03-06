import { useLoaderData, useParams } from "react-router";
import Header from "../Component/Header/Header";
import RightAside from "../Component/homeLayouts/RightAside";
import { useEffect, useState } from "react";
import NewsDetailsCard from "../Component/NewsDetailsCard/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div className="w-11/12 mx-auto">
      <header className="py-4">
        <Header></Header>
      </header>
      <main className="grid gap-4 my-4 grid-cols-12">
        <section className="col-span-9">
          <NewsDetailsCard news={news} />
        </section>

        <aside className="col-span-3 sticky h-fit  ">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
