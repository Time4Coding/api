import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getcomment, getcommentFail, getcommentSuccess } from "./commentSlice";
import { useParams } from "react-router-dom";
import axios from "axios";
import CommentCard from "./CommentCard";

export default function CommentList() {
  const { id, post } = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments);
  useEffect(() => {
    try {
      const fetchcomment = async () => {
        dispatch(getcomment());
        const result = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        dispatch(getcommentSuccess(result.data));
      };
      fetchcomment();
    } catch (error) {
      dispatch(getcommentFail(error.message));
    }
  }, [dispatch]);

  return commentData.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <h1>comment Lists Of {post}</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {commentData.comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
}
