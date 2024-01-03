import React, { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";
import RecipeCard from "./RecipeCard";

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);
  console.log(recipes);

  return (
    <ul className="grid gap-5 grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeInfo={recipe} />
      ))}
    </ul>
  );
};

export default RecipesList;
