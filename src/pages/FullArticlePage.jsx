import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostById } from "../api/api";
import { useNavigate } from "react-router-dom";
import PostCard from "../components//post/PostCard";

const FullArticlePage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((p) => p.id === postId)
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(postId)); // Dispatch the fetch action to get the post by ID
    }
  }, [dispatch, postId]);

  if (!post) {
    return (
      <p>
        <span className="text-danger">Error!</span> Post not found
      </p>
    );
  }

  return (
    <div className="card m-0 p-0 border-0">
      <div className="row mx-2">
        <button
          onClick={handleBackClick}
          className="col-3 btn text-start text-info w-25 ps-0"
        >
          <i className="bi bi-arrow-left ms-0 "></i> Back
        </button>
        <p className="col-9 text-end my-auto pe-0">
          <a
            href={`https://www.reddit.com${post.permalink}`}
            target="_blank"
            rel="noreferrer"
            className="link-info link-offset-2 link-underline-opacity-50"
          >
            View on Reddit
          </a>
        </p>
      </div>
      {/* TODO custom link url to take to reddit from here "view on reddit" */}
      <PostCard key={post.id} post={post} showLink={false} />
    </div>
  );
};

export default FullArticlePage;
