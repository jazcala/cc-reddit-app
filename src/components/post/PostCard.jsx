import PropTypes from "prop-types";

import Post from "./Post";
import CommentList from "../commentList/CommentList";

/**
 * PostCard  includes
 * CommentList Component
 * @param {post} post
 * @returns
 */
const PostCard = ({ post }) => {
  return (
    <div className="container border my-2 py-4">
      <Post post={post} />
      <CommentList post={post} />
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
