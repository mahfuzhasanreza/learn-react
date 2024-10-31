import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover picture of ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14 rounded-full" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className="ml-2 text-2xl"
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash} </a></span>)
                }
            </p>
            <button
                onClick={() => handleReadingTime(reading_time)}
                className="text-purple-700 font-bold underline"
            >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func,
}

export default Blog;