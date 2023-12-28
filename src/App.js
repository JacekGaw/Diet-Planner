import React from "react";
import Menu from "./components/Menu";
import Recipes from "./pages/recipes/Recipes.jsx";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesContextProvider from "./store/recipes-context.jsx"

function App() {
  return (
    <RecipesContextProvider>
    <Menu />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Recipes" element={<Recipes/>}/>

    </Routes>
    </RecipesContextProvider>
  );
}

export default App;
