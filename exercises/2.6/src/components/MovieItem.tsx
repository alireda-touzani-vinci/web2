import { useState } from "react";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li onClick={() => setShowDescription(!showDescription)}>
      <p>
        <strong>{movie.title}</strong> - Réalisateur : {movie.director}
      </p>
      <p>{showDescription ? <i>{movie.description}</i> : null}</p>
    </li>
  );
};

export default MovieItem;
