import React, { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";

const RecipesList = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <ul>
      {recipes.map((recipe) => (
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </ul>
  );
};

export default RecipesList;
