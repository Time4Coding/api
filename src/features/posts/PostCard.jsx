import { useNavigate } from "react-router-dom";
import "./post.css";

export default function PostCard({ post }) {
  const navigate = useNavigate();
  return (
    <div className="blog_post" style={{ margin: "10px" }}>
      <div className="container_copy">
        <h1>{post.title}</h1>
        <p style={{ fontSize: "15px" }}>{post.body}</p>
        <button
          className="btn_primary"
          onClick={() => navigate(`/comments/${post.title}/${post.id}`)}
        >
          Comments
        </button>
      </div>
    </div>
  );
}
