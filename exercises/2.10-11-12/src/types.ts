interface Movie {
  title: string;
  director: string;
  duration: number;
  pictureUrl?: string;
  description?: string;
  budget?: number;
}

interface MovieContext {
  movies: Movie[];
  addMovie: (newMovie: Movie) => void;
}

export type { Movie, MovieContext };
