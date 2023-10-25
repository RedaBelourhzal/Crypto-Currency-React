import { createBrowserRouter } from "react-router-dom";
import MasterPage from "./layouts/MasterPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges";
import ExchangeShow from "./pages/ExchangeShow";
import CoinShow from "./pages/CoinShow";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/coins",
    element: <MasterPage />,
    children: [
      { path: "", element: <Coins /> },

      { path: ":id", element: <CoinShow /> },
    ],
  },

  {
    path: "/exchanges",
    element: <MasterPage />,
    children: [
      { path: "", element: <Exchanges /> },
      { path: ":id", element: <ExchangeShow /> },
    ],
  },
]);
