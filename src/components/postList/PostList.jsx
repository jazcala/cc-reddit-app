import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../../features/posts/postSlice";
import PostCard from "../post/PostCard";
import { useEffect } from "react";
/**
 * Component used to displayed the list of post
 * @returns
 */

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, errMsg } = useSelector((state) => state.posts);

  useEffect(() => {
    if (process.env.NODE_ENV !== "test") {
      dispatch(fetchPostsAsync());
    }
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (errMsg) {
    return <div>Error: {errMsg}</div>;
  }

  return (
    <ul className="list-group mx-0 px-0 ">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostList;
