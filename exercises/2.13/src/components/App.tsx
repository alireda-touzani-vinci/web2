import { useEffect, useState } from "react";
import "./App.css";

interface Joke {
  joke: string;
  category: string;
}

function App() {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setJoke({
          joke: data.joke ?? "No joke found",
          category: data.category ?? "Unkown",
        })
      })
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  if (!joke) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Random Jokes</h1>
      <h3>{joke.category}</h3>
      <p>{joke.joke}</p>
    </div>
  );
}

export default App;
