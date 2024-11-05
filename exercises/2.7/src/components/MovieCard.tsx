import { useState } from "react";
import { Movie } from "../types";

interface MovieCardProps {
    movies: Movie[];
}

const MovieCard = ({ movies}: MovieCardProps) => {
    const [movie, setMovie] = useState("");
    return (

    );
}