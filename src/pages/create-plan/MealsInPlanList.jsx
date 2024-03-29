import React, { useContext, useState } from "react";

import { RecipesContext } from "../../store/recipes-context";

const MealsInPlanList = ({ recipesInPlan, dayIndex, onDeleteRecipe, children }) => {
  const { recipes } = useContext(RecipesContext);
  const [mouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <div className="flex-row">
      {recipesInPlan[dayIndex].recipesIDs.length > 0 ? (
        <ul className="">
          {recipesInPlan[dayIndex].recipesIDs.map((recipeID, index) => {
            const recipe = recipes.filter(
              (recipe) => recipe.id === recipeID
            )[0];
            return (
              <li
                key={index}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                className="relative group"
              >
                <header>
                  <h6 className="text-md font-semibol">{recipe.title}</h6>
                </header>
                <div className="flex text-xs font-light">
                  <p>P: {recipe.proteins}</p>
                  <p>F: {recipe.fats}</p>
                  <p>C: {recipe.carbohydrates}</p>
                </div>
                <p className="text-xs font-light">
                  Calories: {recipe.calories}
                </p>
                <p className="text-xs font-light">
                  Ingredients: {recipe.ingredients.length}
                </p>
                {mouseOver && (
                  <div className="absolute w-full h-full top-0 left-0">
                    <button className="absolute bg-red-800 p-2 shadow-xl top-1/2 left-1/2 text-white -translate-x-[50%] -translate-y-[50%]" onClick={() => {onDeleteRecipe(dayIndex, index)}}>Delete</button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="p-2">No recipes for this day</p>
      )}
    </div>
  );
};

export default MealsInPlanList;
