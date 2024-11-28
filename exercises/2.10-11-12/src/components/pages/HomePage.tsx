import { useOutletContext, Link } from "react-router-dom";
import { MovieContext } from "../../types";
import { Movie } from "../../types";
const HomePage = () => {
  const { movies }: MovieContext = useOutletContext();
  return (
    <div>
      <h1>iMovies</h1>
      <p>Welcome to iMovies!</p>
      <p>
        Imovies is a website where you can see the list of your favorite movies
        and access to a cinema page.
      </p>
      <p>
        <strong>Here is a list of my favorite movies. You can click on them</strong>
        <br />
        {movies.map((movie: Movie) => (
          <Link key={movie.id} to = {`/movies/${movie.id}`} style={{display: "block"}}>{movie.title}</Link>
        ))}
      </p>
    </div>
  );
};

export default HomePage;