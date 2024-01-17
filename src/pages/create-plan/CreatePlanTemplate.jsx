import React, { useState, useRef, useContext } from "react";
import PlanDayCard from "../../components/UI/PlanDayCard";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import { MealPlanContext } from "../../store/meal-plan-context";
import RecipeListItem from "./RecipeListItem";
import MealsInPlanList from "./MealsInPlanList";
import Button from "../../components/UI/Button";

const CreatePlanTemplate = ({ template, onClose }) => {
  let daysArray = [];
  for (let i = 0; i < template.duration; i++) {
    daysArray[i] = { id: i, recipesIDs: [] };
  }
  const [recipesInPlan, setRecipesInPlan] = useState(daysArray);
  const [currentDay, setCurrentDay] = useState();
  const modalRef = useRef();
  const titleRef = useRef();
  const { recipes } = useContext(RecipesContext);
  const { plans, addMealPlan } = useContext(MealPlanContext);
  console.log(template);

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
    modalRef.current.close();
  };

  const convertDate = (givenDate) => {
    const newDate = new Date(givenDate);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onSavePlan = () => {
    let title = "";
    if(titleRef.current.value === "") {
      title = `Plan Created On: ${convertDate(new Date())}`;
    }
    else title = titleRef.current.value;
    addMealPlan(recipesInPlan, title, template.startDate);
    onClose();
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
      <div className="flex justify-center items-center">
        <label className="text-xl mr-2">Plan Title:</label>
        <input ref={titleRef} type="text" className="p-1 border border-slate-200" />
      </div>
      <div className="p-5 flex w-full overflow-x-auto">
        {recipesInPlan.map((day, index) => {
          return (
            <PlanDayCard
              key={index}
              index={index}
              date={template.startDate}
              dayInfo={recipesInPlan[index].recipesIDs}
            >
              <div className="w-full flex justify-center p-1">
                <Button
                  className="p-2 bg-slate-500 text-white text-sm hover:shadow-lg transition-shadow duration-100"
                  onClick={() => handleClickOnAddRecipe(index)}
                >
                  Add recipe +
                </Button>
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
      <Button className="mt-2" onClick={onSavePlan}>Save Plan</Button>
    </>
  );
};

export default CreatePlanTemplate;
