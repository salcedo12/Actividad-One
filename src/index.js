import React, { Children } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Character from "./components/Character";
import {Home} from "./components/pages/Home";
import * as ReactDOM from "react-dom/client";
import {  RouterProvider, createHashRouter } from "react-router-dom";
import EpisodeComponent from "./components/EpisodeComponent";
import CharacterDetails from "./components/Characters";


const router = createHashRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Character",
    element:<Character/>
  },
  {
    path:"/EpisodeComponent",
    element:<EpisodeComponent/>
  }
  ,{
    path:"/characters/:id",
    element:<CharacterDetails/>

  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

