import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import CinemaPage from './components/pages/Cinema';
import MovieListPage from './components/pages/MovieListPage';
import AddMoviePage from './components/pages/AddMoviePage';
import MovieDetailPage from './components/pages/MovieDetailPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/cinema",
        element: <CinemaPage />,
      },
      {
        path: "/movie-list",
        element: <MovieListPage />,
      },
      {
        path: "/add-movie",
        element: <AddMoviePage />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetailPage />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
