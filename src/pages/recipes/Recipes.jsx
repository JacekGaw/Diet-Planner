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

  const changeVisibility = (info) => {
    setAddRecipeView(info);
  }

  return (
    <section className="p-5">
        <header>
            <h2 className="text-center text-3xl">Recipe book</h2>
        </header>
      <button onClick={handleChangeVisibility}>
        {addRecipeView ? "Close" : "Add recipe"}
      </button>
      {addRecipeView === true ? <AddRecipe visibility={changeVisibility}/> : ""}
      <p>Here are some recipesvdv</p>
      {recipes.map(recipe => <p key={recipe.id}>{recipe.title}</p>)}
    </section>
  );
};

export default Recipes;
