import UserCard from "./User";
import { User } from "../types";

const users: User[] = [
  { name: "Ali-Reda", age: 18, isOnline: true },
  { name: "Ayoub", age: 19, isOnline: false },
  { name: "Abdel Wahab", age: 18, isOnline: false },
];

const App = () => {
  return (
    <div>
      <h1>Utilisateurs</h1>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default App;
