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
          <main className="bg-slate-100 p-10 min-h-screen z-10">
            <Routes>
              <Route path="*" element={<RouteError />}/>
              <Route exact path="/" element={<Home />} />
              <Route path="/Recipes" element={<Recipes />} />
              <Route path="/create-plan" element={<CreatePlan />} />
              <Route path="/your-plans" element={<YourPlans />} />
              <Route path="/your-plans/:planIDparam" element={<PlanView />} />
            </Routes>
          </main>
        </section>
      </MealPlanContextProvider>
    </RecipesContextProvider>
  );
}

export default App;
