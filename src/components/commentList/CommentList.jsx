import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../api/api";
import Comment from "../comment/Comment";

const CommentList = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const commentsByPostId = useSelector(
    (state) => state.comments.commentsByPostId
  );

  const {
    comments: postComments,
    loading,
    error,
  } = useMemo(() => {
    return (
      commentsByPostId[post.id] || {
        loading: false,
        error: null,
        comments: [],
      }
    );
  }, [commentsByPostId, post.id]);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchComments(post.id));
    }
  }, [dispatch, post.id, isOpen]);

  if (error) {
    return <div>Error loading comments: {error}</div>;
  }

  return (
    <div className=" border-top pt-2">
      <div className="row">
        <div className="col text-truncate align-button py-2 text-start ">
          By{" "}
          <a
            href={`https://www.reddit.com/u/${post.author}`}
            target="_blank"
            rel="noreferrer"
            className="link-info link-offset-2 link-underline-opacity-50 fw-bold"
          >
            {post.author}
          </a>
        </div>
        <button
          className="col-4 btn text-end  w-auto"
          onClick={() => setIsOpen(!isOpen)}
          data-bs-toggle="collapse"
          href={`#commentsList-${post.id}`}
          aria-expanded="false"
          aria-controls="commentsList"
          role="button"
        >
          <i className="bi bi-chat-left"></i>{" "}
          <span className="fw-light">{post.num_comments}</span>
        </button>
      </div>
      <div className="collapse" id={`commentsList-${post.id}`}>
        <ul className="list-group">
          {loading ? (
            <p>Loading...</p>
          ) : (
            postComments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

CommentList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentList;
