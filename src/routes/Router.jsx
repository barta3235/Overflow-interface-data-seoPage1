import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
} from "react-router-dom";
import MotherPage from "../MainLayout/MotherPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MotherPage></MotherPage>,
    },
  ]);

export default router;