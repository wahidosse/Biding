import { useRoutes } from "react-router-dom";
import HomePage from "./pages/homePage";

export function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
}
