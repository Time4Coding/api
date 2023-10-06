import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import "./userCard.css";

export default function UserList() {
  const { users } = useSelector((state) => state.users);
  return (
    <div className="container">
      <div className="row">
        {users.map((user, id) => (
          <UserCard user={user} key={user.id} img="https://i.pravatar.cc/50" />
        ))}
      </div>
    </div>
  );
}
