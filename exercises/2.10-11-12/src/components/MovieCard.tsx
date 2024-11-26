import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      {movie.pictureUrl && <img src={movie.pictureUrl} alt="Movie picture" />}
      <p>
        Réalisateur: <strong>{movie.director}</strong>
      </p>
      <p>Durée: {movie.duration} minutes</p>
      {movie.description && <p>{movie.description}</p>}
      {movie.budget && <p> Budget: {movie.budget} millions</p>}
    </div>
  );
};

export default MovieCard;