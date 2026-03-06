import { FaStar, FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";
import { Link } from "react-router";
const NewsCard = ({ news }) => {
  const {
    id,
    title,
    image_url,
    thumbnail_url,
    author,
    details,
    total_view,
    rating,
  } = news;

  const formattedDate = new Date(
    news.author.published_date,
  ).toLocaleDateString();
  return (
    <div className=" bg-white rounded-2xl  overflow-hidden border">
      {/* Header */}
      <div className="flex items-center bg-base-200 justify-between p-4  ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-sm">{author.name}</h4>
            <p className="text-xs text-gray-500"> {formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 cursor-pointer">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h2 className="font-bold text-lg leading-snug">{title}</h2>
      </div>

      {/* Image */}
      <div className="px-4">
        <img
          src={image_url ? `${image_url}` : `${thumbnail_url}`}
          alt="news"
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="p-4 text-sm text-gray-600">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <Link to={`/news-details/${id}`} className="text-red-400">
              Read More
            </Link>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-black font-bold pl-2"> {rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
