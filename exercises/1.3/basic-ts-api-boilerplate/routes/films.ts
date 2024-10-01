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
    director: "AGDFDFD",
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
  if(!req.query["minimum-duration"])
    return res.json(defaultFilms);

  const minimumDuration = Number(req.query["minimum-duration"]);
  if(minimumDuration <= 0)
    return res.json("Wrong minimum duration");
  
  const filteredFilms = defaultFilms.filter((film) => {
    return film.duration >= minimumDuration;
  });

  return res.json(filteredFilms);
});



router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = defaultFilms.find((film) => film.id === id);
  if(!film)
    return res.sendStatus(404);

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
    ("imageUrl" in body && typeof body.imageUrl !== "string")) {
    return res.sendStatus(400);
  }

  const { title, director, duration, budget, description, imageUrl} = body as NewFilm;

  const nextId =
    defaultFilms.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) +
    1;

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

export default router;
