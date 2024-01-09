import React, { useContext } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import { RecipesContext } from "../../store/recipes-context";

const MealsInPlanList = ({ recipesInPlan, children }) => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="flex-row">
      {recipesInPlan.recipesIDs.length > 0 ? (
        <ul className="">
          {recipesInPlan.recipesIDs.map((recipeID) => {
            return (
              <li key={recipeID}>
                {recipes.filter((recipe) => recipe.id === recipeID)[0].title}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No recipes for this day</p>
      )}
    </div>
  );
};

export default MealsInPlanList;
