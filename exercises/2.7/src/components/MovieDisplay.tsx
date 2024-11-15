import MovieCard from "./MovieCard";
import { Movie } from "../types";

interface MovieDisplayProps {
  movies: Movie[];
}

const MovieDisplay = ({ movies }: MovieDisplayProps) => {
  return (
    <div>
      {movies.map((m) => (
        <div key={m.title}>
          <MovieCard movie={m} />
        </div>
      ))}
    </div>
  );
};
export default MovieDisplay;
