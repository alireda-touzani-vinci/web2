interface Film {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  pictureUrl?: string;
}

type NewFilm = Omit<Film, "id">;

export type { Film, NewFilm };
