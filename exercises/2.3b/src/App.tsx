import { User } from "./types";
import PageTitle from "./components/Title";
import UsersList from "./components/User";
import Footer from "./components/Footer";

const App = () => {
  const title = "Welcome to My App";
  const UsersCards: User[] = [
    {
      id: 1,
      name: "Alice",
      age: 25,
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
    },
    {
      id: 3,
      name: "Charlie",
      age: 35,
    },
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <UsersList users={UsersCards} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;
