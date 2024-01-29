import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/Home-Page";
import MoviePage from "../pages/Movie-Page";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/m",
      element: <MoviePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
