import { useState, SyntheticEvent } from "react";
import { Movie } from "../types";

interface AddMovieFormProps {
    onMovieAdded: (movie: Movie) => void;
}

const AddMovieForm = ({onMovieAdded}: AddMovieFormProps) => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [duration, setDuration] = useState(0);
    const [newPicture, setPicture] = useState("");
    const [newDescription, setDescription] = useState("");
    const [newBudget, setBudget] = useState(0);

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        console.log("Submit: ", newTitle, newDirector, newDuration, newPicture, newDescription, newBudget);
        onMovieAdded({title, director, duration, pictureUrl, newDescription, newBudget});
        setTitle("");
        setDirector("");
        setDuration(0);
        setPicture("");
        s
    };
    return (

    )
}