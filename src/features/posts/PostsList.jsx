import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getPostsFail, getPostsSuccess } from "./postsSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";

export default function PostsList() {
  const { id, user } = useParams();
  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);
  useEffect(() => {
    try {
      const fetchPosts = async () => {
        dispatch(getPosts());
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        );
        dispatch(getPostsSuccess(result.data));
      };
      fetchPosts();
    } catch (error) {
      dispatch(getPostsFail(error.message));
    }
  }, [dispatch]);

  return postsData.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>Posts Lists Of {user}</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {postsData.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
