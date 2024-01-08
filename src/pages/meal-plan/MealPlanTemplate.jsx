import React, { useState, useEffect, useRef, useContext } from "react";
import PlanDay from "../../components/UI/PlanDayCard";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import RecipeListItem from "./RecipeListItem";

const MealPlanTemplate = ({ template }) => {
  let daysArray = [];
  for (let i = 0; i < template.duration; i++) {
    daysArray[i] = { id: i, recipesIDs: [] };
  }
  const [recipesInPlan, setRecipesInPlan] = useState(daysArray);
  const [currentDay, setCurrentDay] = useState();
  const modalRef = useRef();
  const { recipes } = useContext(RecipesContext);

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
            <PlanDay key={index} index={index} date={template.startDate}>
              <div className="w-full flex justify-center p-1">
                <button
                  className="p-2 bg-slate-500 text-white text-sm hover:shadow-lg transition-shadow duration-100"
                  onClick={() => handleClickOnAddRecipe(index)}
                >
                  Add recipe +
                </button>
              </div>
              <div className="flex-row">
                {recipesInPlan[index] ? (
                  <div className="flex-col">{recipesInPlan[index].recipesIDs}</div>
                  //Jest wyswietlone id, teraz przeszukac recipes i wyswietlic tytuly
                ) : (
                  <p>No recipes for this day</p>
                )}
              </div>
            </PlanDay>
          );
        })}
      </div>
      <button onClick={() => console.log(recipesInPlan)}>Show stack</button>
    </>
  );
};

export default MealPlanTemplate;
