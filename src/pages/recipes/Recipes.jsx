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
    <section className=" relative">
      <span className="material-symbols-outlined text-[600px] rotate-12 right-[40px] m-0 absolute opacity-5 z-0 ">
        menu_book
      </span>

      <header className="w-full p-2 z-50">
        <h2 className="text-center text-5xl font-regular z-50 drop-shadow-md">Recipe book</h2>
      </header>
      <button
        onClick={handleChangeVisibility}
        className="bg-dark-green text-white rounded p-2 text-sm mb-5"
      >
        {addRecipeView ? "Close" : "Add recipe"}
      </button>
      {addRecipeView === true ? (
        <AddRecipe visibility={changeVisibility} />
      ) : (
        ""
      )}
      <RecipesList
        className="flex gap-4 z-50"
        cardStyle="z-50 w-1/4 bg-white rounded-xl flex flex-col justify-between border-2 border-dark-green"
      />
    </section>
  );
};

export default Recipes;
