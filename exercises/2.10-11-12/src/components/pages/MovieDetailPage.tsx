import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";

const MovieDetailPage = () => {
    const match = useMatch("/movies/:id");
    const movieId = match?.params.id;
    const {movies}: MovieContext = useOutletContext();
    if (!movieId) return <p>Movie not found</p>;

    const movie = movies.find((movie) => movie.id === parseInt(movieId));
    if (!movie) return <p>Movie not found</p>;

    return (
        <div>
            <h1>{movie.title} Detail Page</h1>
            {movie?.pictureUrl && <img src={movie.pictureUrl}/>}
            <p>Director: {movie.director}</p>   
            <p>Duration: {movie.duration} minutes</p>
            {movie.budget && <p>Budget: {movie.budget} millions $</p>}
            {movie.description && <p>Description: {movie.description}</p>}
        </div>
    )
};

export default MovieDetailPage;