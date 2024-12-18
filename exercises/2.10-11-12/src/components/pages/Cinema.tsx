import { Movie } from "../../types";
import MovieCard from "../MovieCard";

const CinemaPage = () => {
  const name = "UGC DeBrouckère";
  const movies: Movie[] = [
    {
      id: 6,
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description:
        "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors.",
      duration: 120,
    },
    {
      id: 7,
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description:
        "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative.",
      duration: 90,
    },
    {
      id: 8,
      title: "INCEPTION",
      director: "Christopher Nolan",
      description:
        "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious.",
      duration: 148,
    },
    {
      id: 9,
      title: "PARASITE",
      director: "Bong Joon-ho",
      description:
        "An Oscar-winning dark comedy thriller that examines class disparities through the story of two families — one wealthy, the other destitute — and their increasingly complicated relationship.",
      duration: 132,
    },
  ];

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default CinemaPage;
