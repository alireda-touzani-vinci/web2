import { useState, SyntheticEvent } from "react";
import { Movie } from "../types";

interface AddMovieFormProps {
    onAddMovie: (movie: Movie) => void;
}

const AddMovieForm = ({onAddMovie}: AddMovieFormProps) => {
  const [newTitle, setTitle] = useState("");
  const [newDirector, setDirector] = useState("");
  const [newDuration, setDuration] = useState(0);
  const [newPicture, setPicture] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newBudget, setBudget] = useState(0);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(
      "Submit: ",
      newTitle,
      newDirector,
      newDuration,
      newPicture,
      newDescription,
      newBudget
    );

    const newMovie: Movie = {
      title: newTitle,
      director: newDirector,
      duration: newDuration,
      pictureUrl: newPicture,
      description: newDescription,
      budget: newBudget,
    };

    onAddMovie(newMovie);
    setMovies([...movies, newMovie]);

    console.log("New movie: ", newMovie);
    setTitle("");
    setDirector("");
    setDuration(0);
    setPicture("");
    setDescription("");
    setBudget(0);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Director"
        value={newDirector}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration"
        value={newDuration}
        onChange={(e) => setDuration(parseInt(e.target.value))}
        required
      />
      <input
        type="text"
        placeholder="Picture"
        value={newPicture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={newDescription}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        value={newBudget}
        onChange={(e) => setBudget(parseInt(e.target.value))}
      />
      
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovieForm;
