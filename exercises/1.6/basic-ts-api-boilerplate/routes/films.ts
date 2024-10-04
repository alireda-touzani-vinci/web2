import { Film, NewFilm } from "../types";
import { Router } from "express";
const router = Router();

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "Spider-Man",
    director: "Sam",
    duration: 90,
  },

  {
    id: 2,
    title: "Batman",
    director: "Stan",
    duration: 78,
  },

  {
    id: 3,
    title: "Captain America",
    director: "Rock",
    duration: 74,
  },
  {
    id: 4,
    title: "Captain America",
    director: "AGDFDFD",
    duration: 74,
  },
];

router.get("/", (req, res) => {
  if (!req.query["minimum-duration"]) return res.json(defaultFilms);

  const minimumDuration = Number(req.query["minimum-duration"]);
  if (minimumDuration <= 0 || typeof minimumDuration !== "number")
    return res.sendStatus(400);

  const filteredFilms = defaultFilms.filter((film) => {
    return film.duration >= minimumDuration;
  });

  return res.json(filteredFilms);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) return res.sendStatus(404);

  return res.json(film);
});

router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    body.duration <= 0 ||
    ("budget" in body && typeof body.budget !== "number") ||
    ("budget" in body && typeof body.budget === "number" && body.budget <= 0) ||
    ("description" in body && typeof body.description !== "string") ||
    ("imageUrl" in body && typeof body.imageUrl !== "string")
  ) {
    return res.sendStatus(400);
  }

  for (let index = 0; index < defaultFilms.length; index++) {
    if (body.title === defaultFilms[index].title && body.director === defaultFilms[index].director) {
      return res.sendStatus(409);
    }
  }

  const { title, director, duration, budget, description, imageUrl } =
    body as NewFilm;

  const nextId =
    defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;

  const newDrink: Film = {
    id: nextId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  defaultFilms.push(newDrink);
  return res.json(newDrink);
});




router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const filmId = defaultFilms.findIndex((film) => film.id === id);
  if (filmId === -1) {
    return res.sendStatus(404);
  }

  const deletedFilms = defaultFilms.splice(filmId, 1);

  return res.json(deletedFilms[0]);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if (!film) {
    return res.sendStatus(404);
  }

  const body : unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body && (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim()))
  ) {
    return res.sendStatus(400);
  }
  const {title, director, duration, budget, description, imageUrl} : Partial<NewFilm> = body;
    
    if(title){
      film.title = title;
    }

    if(director){
      film.director = director;
    }

    if (duration) {
      film.duration = duration;
    }

    if (budget) {
      film.budget = budget;
    }

    if (description) {
      film.description = description;
    }

    if (imageUrl) {
      film.imageUrl = imageUrl;
    }

    return res.json(film);
});


router.put("/:id", (req, res) => {
  const body : unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0 ||
    ("budget" in body &&
      (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body &&
      (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body &&
      (typeof body.imageUrl !== "string" || !body.imageUrl.trim()))
  ) {
    return res.sendStatus(400);
  }

  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.sendStatus(400);
  }

  const indexOfFilmToUpdate = defaultFilms.findIndex((film) => film.id === id);

  if (indexOfFilmToUpdate < 0) {
    const newFilm = body as NewFilm;
    const nextId =
      defaultFilms.reduce((acc, film) => (film.id > acc ? film.id : acc), 0) + 1;

    const addedFilm = { id: nextId, ...newFilm };

    defaultFilms.push(addedFilm);

    return res.json(addedFilm);
  }

  const updatedFilm = { ...defaultFilms[indexOfFilmToUpdate], ...body } as Film;

  defaultFilms[indexOfFilmToUpdate] = updatedFilm;

  return res.send(updatedFilm);
});

export default router;
