import { Link } from "react-router-dom";
import { getImageUrl, getDescription } from "../../utils/helpers";
import Counter from "../../subcomponents/Counter";
import PropTypes from "prop-types";

function Post({ post, showLink }) {
  return (
    <div className="card p-2 border-0">
      <div className="row">
        <div className="col col-3">
          <Counter postId={post.id} />
        </div>
        <div className="col col-9">
          {getImageUrl(post) ? (
            <img
              alt={getDescription(post)}
              src={getImageUrl(post)}
              className="img-thumbnail"
              onError={(e) => {
                e.target.onerror = null;
                e.target.className += " placeholder opacity-75";
              }}
            />
          ) : (
            <div
              className="img-thumbnail placeholder opacity-50 container-sm"
              style={{ height: "100%" }}
            ></div>
          )}
        </div>
      </div>
      <h5 className="card-title my-2">{post.title}</h5>
      <div className="card-body">
        <p className="card-text">{getDescription(post)}</p>
      </div>
      {showLink ? (
        <div className="d-flex justify-content-end">
          <Link
            to={`/post/${post.id}`}
            className="link-info link-offset-2 link-underline-opacity-50 my-2"
          >
            See full article
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    selftext: PropTypes.string,
    post_hint: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Post;
