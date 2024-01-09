import React, { useState, useRef, useContext } from "react";
import PlanDayCard from "../../components/UI/PlanDayCard";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import { MealPlanContext } from "../../store/meal-plan-context";
import RecipeListItem from "./RecipeListItem";
import MealsInPlanList from "./MealsInPlanList";

const MealPlanTemplate = ({ template }) => {
  let daysArray = [];
  for (let i = 0; i < template.duration; i++) {
    daysArray[i] = { id: i, recipesIDs: [] };
  }
  const [recipesInPlan, setRecipesInPlan] = useState(daysArray);
  const [currentDay, setCurrentDay] = useState();
  const modalRef = useRef();
  const { recipes } = useContext(RecipesContext);
  const { addMealPlan } = useContext(MealPlanContext);

  const handleClickOnAddRecipe = (index) => {
    modalRef.current.open();
    setCurrentDay(index);
  };

  const handleOnRecipeClick = (recipeID) => {
    const newArr = recipesInPlan.map((prevItem) => {
      if (prevItem.id === currentDay) {
        return {
          ...prevItem,
          recipesIDs: [...prevItem.recipesIDs, recipeID],
        };
      } else return prevItem;
    });
    setRecipesInPlan(newArr);
  };

  const onSavePlan = () => {
    addMealPlan(recipesInPlan);
    console.log(recipesInPlan);
  };

  const handleDeleteRecipe = (dayIndex, givenRecipeIndex) => {
    const newRecipesArr = recipesInPlan[dayIndex].recipesIDs;
    newRecipesArr.splice(givenRecipeIndex, 1);
    const newArr = recipesInPlan.map((item) => {
      if (item.id === dayIndex) {
        return {
          id: item.id,
          recipesIDs: newRecipesArr,
        };
      } else return item;
    });

    setRecipesInPlan(newArr);
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
        {recipesInPlan.map((day, index) => {
          return (
            <PlanDayCard
              key={index}
              index={index}
              date={template.startDate}
              recipesIDs={recipesInPlan[index].recipesIDs}
            >
              <div className="w-full flex justify-center p-1">
                <button
                  className="p-2 bg-slate-500 text-white text-sm hover:shadow-lg transition-shadow duration-100"
                  onClick={() => handleClickOnAddRecipe(index)}
                >
                  Add recipe +
                </button>
              </div>
              <MealsInPlanList
                recipesInPlan={recipesInPlan}
                dayIndex={index}
                onDeleteRecipe={handleDeleteRecipe}
              ></MealsInPlanList>
            </PlanDayCard>
          );
        })}
      </div>
      <button onClick={onSavePlan}>Save Plan</button>
    </>
  );
};

export default MealPlanTemplate;
