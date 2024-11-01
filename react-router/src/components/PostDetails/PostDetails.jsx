import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, body } = post;
    const { postId } = useParams();

    console.log(postId);

    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <h2>Post Details: {id}</h2>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button
                onClick={handleGoBack}
            >Go back</button>
        </div>
    );
};

export default PostDetails;