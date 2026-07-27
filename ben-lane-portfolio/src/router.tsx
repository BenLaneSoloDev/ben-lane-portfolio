import { createBrowserRouter } from "react-router";
import Home from "./pages/home/home.tsx";
import Software from "./pages/software/software.tsx";
import Games from './pages/games/games.tsx';
import Error404 from './pages/404/error404.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/software-dev",
    element: <Software />
  },
  {
    path: "/game-dev",
    element: <Games />
  },
  {
    path: "*",
    element: <Error404 />
  }
]);