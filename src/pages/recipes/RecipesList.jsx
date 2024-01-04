import React, { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";
import RecipeCard from "./RecipeCard";

const RecipesList = ({className, cardStyle}) => {
  const { recipes } = useContext(RecipesContext);

  return (
    <ul className={className}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipeInfo={recipe} className={cardStyle} />
      ))}
    </ul>
  );
};

export default RecipesList;
