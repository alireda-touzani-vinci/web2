import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, CinemaPage, MovieListPage } from './components/App';

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
    ],
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
