import { Link, useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    return (
        <div>
            <h2>Post Details: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;