import "./App.css";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Cinema from "./Cinema";
import { cinemaName, moviesCinema } from "../constants";
import MovieList from "./MovieList";
import Footer from "./Footer";
import Header from "./Header";


const HomePage = () => <Home />;
const CinemaPage = () => <Cinema name={cinemaName} movies={moviesCinema}/>
const MovieListPage = () => <MovieList />;
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
export { HomePage, CinemaPage, MovieListPage };