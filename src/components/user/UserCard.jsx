import { useNavigate } from "react-router-dom";

export default function UserCard({ user, img }) {
  const navigate = useNavigate();
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3"
      onClick={() => navigate(`/posts/${user.name}/${user.id}`)}
    >
      <div className="our-team">
        <div className="picture">
          <img className="img-fluid" src={img} alt="hello" />
        </div>
        <div className="team-content">
          <h3 className="name">{user.name}</h3>
          <h4 className="title">{user.email}</h4>
        </div>
        <ul className="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-facebook"
              aria-hidden="true"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-twitter"
              aria-hidden="true"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-google-plus"
              aria-hidden="true"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-linkedin"
              aria-hidden="true"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
