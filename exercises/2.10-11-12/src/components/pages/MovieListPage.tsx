import MovieDisplay from "../MovieDisplay";
import { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <h1>My favorite movies</h1>
      <MovieDisplay movies={movies} />
    </div>
  );
};

export default MovieListPage;
