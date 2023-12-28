import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
