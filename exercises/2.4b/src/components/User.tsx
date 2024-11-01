import { User } from "../types";
import "./User.css"

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>{props.user.age}</p>
      <p className={props.user.isOnline ? "online" : "offline"}>
        {props.user.isOnline ? "En ligne" : "Hors ligne"}
      </p>
    </div>
  );
};

export default UserCard;
