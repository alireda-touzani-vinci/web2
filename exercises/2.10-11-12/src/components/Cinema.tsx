import { Movie } from "../types";
import MovieCard from "./MovieCard";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemaProps) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </ul>
  </div>
);

export default Cinema;