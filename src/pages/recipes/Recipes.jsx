import React, { useContext, useState } from "react";
import AddRecipe from "./AddRecipe";
import { RecipesContext } from "../../store/recipes-context";

const Recipes = () => {
    const {recipes}= useContext(RecipesContext);
  const [addRecipeView, setAddRecipeView] = useState(false);
  const handleChangeVisibility = () => {
    setAddRecipeView((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <p>Here are some recipesvdv</p>
      <p>{recipes.map(recipe => <p>{recipe.title}</p>)}</p>
      <button onClick={handleChangeVisibility}>
        {addRecipeView ? "Close" : "Add recipe"}
      </button>
      {addRecipeView === true ? <AddRecipe /> : ""}
    </>
  );
};

export default Recipes;
