import { useState, SyntheticEvent } from "react";
import { Movie } from "../types";
import "./AddMovieForm.css";
import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../types";


const AddMovieForm = () => {
  const [newTitle, setTitle] = useState("");
  const [newDirector, setDirector] = useState("");
  const [newDuration, setDuration] = useState(0);
  const [newPicture, setPicture] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newBudget, setBudget] = useState(0);
  const {addMovie}: MovieContext = useOutletContext();
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
    addMovie(newMovie);
  };




  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formulaire-centre">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="input-arrondi"
        />
        <label htmlFor="director">Director</label>
        <input
          type="text"
          placeholder="Director"
          value={newDirector}
          onChange={(e) => setDirector(e.target.value)}
          required
          className="input-arrondi"
        />
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          placeholder="Duration"
          value={newDuration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
          className="input-arrondi"
        />
        <label htmlFor="picture">Picture URL</label>
        <input
          type="text"
          placeholder="Picture"
          value={newPicture}
          onChange={(e) => setPicture(e.target.value)}
          className="input-arrondi"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setDescription(e.target.value)}
          className="input-arrondi"
        />
        <label htmlFor="budget">Budget</label>
        <input
          type="number"
          placeholder="Budget"
          value={newBudget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          className="input-arrondi"
        />

        <button type="submit" className="input-arrondi">Add</button>
      </form>
    </div>
  );
};

export default AddMovieForm;