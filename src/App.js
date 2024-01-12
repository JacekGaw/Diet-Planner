import React from "react";
import Menu from "./components/Menu";
import Recipes from "./pages/recipes/Recipes.jsx";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesContextProvider from "./store/recipes-context.jsx";
import CreatePlan from "./pages/create-plan/CreatePlan.jsx";
import MealPlanContextProvider from "./store/meal-plan-context.jsx";
import YourPlans from "./pages/your-plans/YourPlans.jsx";
import PlanView from "./pages/your-plans/PlanView.jsx";
import RouteError from "./components/RouteError.jsx";

function App() {
  return (
    <RecipesContextProvider>
      <MealPlanContextProvider>
        <section>
          <Menu />
          <main className="bg-gradient-to-br from-slate-50 p-10 to-slate-100 min-h-screen z-10">
            <Routes>
            <Route path="*" errorElement={<RouteError />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/create-plan" element={<CreatePlan />} />
              <Route path="/your-plans" element={<YourPlans />} />
              <Route
                path="/your-plans/:planIDparam"
                errorElement={<RouteError />}
                loader={() => {
                  // unexpected errors in loaders/actions
                  
                }}
                action={() => {
                  // stuff you throw on purpose in loaders/actions
                  throw new Response("Bad Request", { status: 400 });
                }}
                element={<PlanView />}
              />
            </Routes>
          </main>
        </section>
      </MealPlanContextProvider>
    </RecipesContextProvider>
  );
}

export default App;