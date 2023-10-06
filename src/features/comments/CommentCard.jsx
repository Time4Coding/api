import "./comment.css";

export default function PostCard({ comment }) {
  return (
    <div className="blog_post" style={{ margin: "10px" }}>
      <div className="container_copy">
        <h1>{comment.name}</h1>
        <p style={{ fontSize: "15px" }}>{comment.body}</p>
      </div>
    </div>
  );
}
