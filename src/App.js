import "./App.css";
import { Routers } from "./Routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}

export default App;
