import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Recipes from "./pages/recipes/Recipes.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./components/Menu.jsx";
import CreatePlan from "./pages/create-plan/CreatePlan.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteError from "./components/RouteError";
import PlanView from "./pages/your-plans/PlanView";
import YourPlans from "./pages/your-plans/YourPlans";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<RouteError />} />
      <Route path="/" element={<App />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/create-plan" element={<CreatePlan />} />
      <Route path="/your-plans" element={<YourPlans />} component={<Menu />}/>
      <Route
        path="/your-plans/:planIDparam"
        errorElement={<RouteError />}
        element={<PlanView />}
      />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
