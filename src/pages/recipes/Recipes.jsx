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
    <section className=" z-0 flex flex-col ">
      <header className="w-full relative p-2 z-50 ">
        <h2 className="text-center text-5xl font-regular z-50 drop-shadow-md">Recipe book</h2>
        <span className="material-symbols-outlined text-[100px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0 ">
        menu_book
      </span>
      </header>
      <div>
      <button
        onClick={handleChangeVisibility}
        className="bg-dark-green text-white rounded p-2 text-sm mb-5"
      >
        {addRecipeView ? "Close" : "Add recipe"}
      </button>
      </div>
      {addRecipeView === true ? (
        <AddRecipe visibility={changeVisibility} />
      ) : (
        ""
      )}
      <RecipesList
        className="flex flex-wrap z-50 w-full"
        cardStyle="z-50 w-[23%] m-[1%] bg-white rounded-xl flex flex-col justify-between border-2 border-dark-green"
      />
    </section>
  );
};

export default Recipes;
