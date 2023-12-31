import React from "react";
import Menu from "./components/Menu";
import Recipes from "./pages/recipes/Recipes.jsx";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipesContextProvider from "./store/recipes-context.jsx";
import MealPlan from "./pages/meal-plan/MealPlan.jsx";
import MealPlanContextProvider from "./store/meal-plan-context.jsx";

function App() {
  return (
    <RecipesContextProvider>
      <MealPlanContextProvider>
      <section>
        <Menu />
        <main className="bg-gradient-to-br from-green to-green2 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recipes" element={<Recipes />} />
            <Route path="/Meal-plan" element={<MealPlan />} />
          </Routes>
        </main>
      </section>
      </MealPlanContextProvider>
    </RecipesContextProvider>
  );
}

export default App;
