import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, image_url, details } = news;
  return (
    <div className="space-y-5">
      <img src={image_url} alt="" />
      <h2 className="text-2xl font-bold py-2">{title}</h2>
      <p className=" py-2 w-full h-[350px] object-cover font-medium">
        {details}
      </p>
      <Link to={`/category/${news.category_id}`}>
        {" "}
        <button className="btn btn-primary"> Back to category</button>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
