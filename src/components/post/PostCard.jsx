import PropTypes from "prop-types";
import Post from "./Post";
import CommentList from "../commentList/CommentList";

/**
 * PostCard  includes
 * CommentList Component
 * @param {post} post
 * @returns
 */

const PostCard = ({ post, showLink = true }) => {
  return (
    <div className="container border border-light-subtle rounded-3 my-2 py-2">
      <Post post={post} showLink={showLink} />
      <CommentList post={post} />
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
