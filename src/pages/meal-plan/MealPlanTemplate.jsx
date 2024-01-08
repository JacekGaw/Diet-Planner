import React, { useState, useEffect, useRef, useContext } from "react";
import PlanDay from "../../components/UI/PlanDayCard";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import RecipeListItem from "./RecipeListItem";

const MealPlanTemplate = ({ template }) => {
    const [recipesInPlan, setRecipesInPlan] = useState([]);
  const [currentDay, setCurrentDay] = useState();
  const modalRef = useRef();
  const { recipes } = useContext(RecipesContext);
  const [duration, setDuration] = useState();
  let daysArray = [];

  useEffect(() => {
    let durationDate = template.duration;
    if (durationDate === "day") setDuration(1);
    else if (durationDate === "week") setDuration(7);
    else if (durationDate === "month") setDuration(31);
  }, []);

  for (let i = 0; i < duration; i++) {
    daysArray[i] = { id: i, recipesIDs: [] };
  }
    
    // setRecipesInPlan(daysArray);

  const handleClickOnAddRecipe = (index) => {
    modalRef.current.open();
    setCurrentDay(index);
  };

  const handleOnRecipeClick = (recipeID) => {
    console.log(recipeID);
    console.log(currentDay);
    
  };

  return (
    <>
      <Modal ref={modalRef}>
        <ul>
          {recipes.map((recipe) => {
            return (
              <RecipeListItem
                title={recipe.title}
                key={recipe.id}
                onClick={() => handleOnRecipeClick(recipe.id)}
              ></RecipeListItem>
            );
          })}
        </ul>
      </Modal>
      <div className="p-5 flex w-full overflow-x-auto">
        {daysArray.map((day, index) => {
          return (
            <PlanDay key={index} index={index} date={template.startDate}>
              <div className="w-full flex justify-center p-1">
                <button
                  className="p-2 bg-slate-500 text-white text-sm hover:shadow-lg transition-shadow duration-100"
                  onClick={() => handleClickOnAddRecipe(index)}
                >
                  Add recipe +
                </button>
              </div>
              {recipesInPlan[index] ? (
                <p>there are recipes</p>
              ) : (
                <p>No recipes for this day</p>
              )}
            </PlanDay>
          );
        })}
      </div>
      <button onClick={() => (console.log(recipesInPlan))}>Show stack</button>
    </>
  );
};

export default MealPlanTemplate;
