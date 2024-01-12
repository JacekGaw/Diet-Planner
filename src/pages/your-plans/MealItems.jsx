import React, { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";

const MealItems = ({ mealsIDs }) => {
  const { recipes } = useContext(RecipesContext);
  
  return (
    <ul>
      {mealsIDs.length ? (
        mealsIDs.map((mealID, index) => {
          const meal = recipes.filter((recipe) => recipe.id === mealID)[0];
          return <li className="border-b-2 border-slate-300 p-2" key={index}>
            <header>
                <h5 className="text-center font-medium">{meal.title}</h5>
            </header>
            <div className="flex justify-center text-xs text-slate-500">
                <p className="px-1 capitalize">{meal.category},</p>
                <p className="px-1">{meal.ingredients.length} ingredients,</p>
            </div>
            <div className="flex justify-center text-xs text-slate-500">
                <p className="px-1">P:{meal.proteins}g</p>
                <p className="px-1">F:{meal.fats}g</p>
                <p className="px-1">C:{meal.carbohydrates}g</p>
                <p className="px-1"> {meal.calories}kcal</p>
            </div>
            </li>;
        })
      ) : (
        <p>No meals</p>
      )}
    </ul>
  );
};

export default MealItems;
