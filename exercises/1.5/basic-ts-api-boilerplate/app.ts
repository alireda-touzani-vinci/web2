import express from "express";

import filmRouter from "./routes/films";

const app = express();

const requestStats: { [key: string]: { [key: string]: number } } = {};

// Middleware pour enregistrer et afficher les statistiques des requêtes
app.use((req, _res, next) => {
  const method = req.method;
  const path = req.path;

  if (!requestStats[path]) {
    requestStats[path] = {};
  }

  if (!requestStats[path][method]) {
    requestStats[path][method] = 0;
  }

  requestStats[path][method]++;

  console.log("Request counter :");
  for (const path in requestStats) {
    for (const method in requestStats[path]) {
      console.log(`- ${method} ${path} : ${requestStats[path][method]}`);
    }
  }

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/films", filmRouter);

export default app;
