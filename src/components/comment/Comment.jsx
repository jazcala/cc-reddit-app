import PropTypes from "prop-types";

/**
 * Recieves a Comment and display it
 * @param {comment} param0
 * @returns
 */

const Comment = ({ comment }) => {
  const { author, score, body } = comment;

  if( !author ){
    return <></>
  }

  return (
    <li className="list-group-item border-0 p-0">
      <div className="card p-0 my-2 mx-0">
        <div className="card-body p-0 ">
          <div className="row bg-body-secondary m-0 pt-2">
            <h5 className="card-title text-start col-8">{author}</h5>
            <p className=" text-end col-4"><i class="bi bi-heart-fill text-danger"></i> {score}</p>
          </div>
          <p className="card-text text-start p-2 ">{body}</p>
        </div>
      </div>
    </li>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
};

export default Comment;
