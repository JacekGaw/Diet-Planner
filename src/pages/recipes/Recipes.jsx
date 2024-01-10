import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import RecipesList from "./RecipesList";

const Recipes = () => {
  const [addRecipeView, setAddRecipeView] = useState(false);
  const handleChangeVisibility = () => {
    setAddRecipeView((prevState) => {
      return !prevState;
    });
  };

  const changeVisibility = (info) => {
    setAddRecipeView(info);
  };

  return (
    <section className="p-5">
      <header>
        <h2 className="text-center text-3xl text-white">Recipe book</h2>
      </header>
      <button onClick={handleChangeVisibility} className="bg-dark-green text-white rounded p-2 text-sm mb-5">
        {addRecipeView ? "Close" : "Add recipe"}
      </button>
      {addRecipeView === true ? (
        <AddRecipe visibility={changeVisibility} />
      ) : (
        ""
      )}
      <RecipesList className="flex gap-4 " cardStyle=" w-1/3 bg-white rounded-lg"/>
    </section>
  );
};

export default Recipes;
