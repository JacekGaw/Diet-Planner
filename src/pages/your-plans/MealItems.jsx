import React, { useContext, useRef, useState } from "react";
import { RecipesContext } from "../../store/recipes-context";
import Modal from "../../components/UI/Modal";
import { getMealInfo } from "../../helpers/getMealInfo";

const MealItems = ({ mealsIDs }) => {
  const { recipes } = useContext(RecipesContext);
  const modalRef = useRef();
  const [modalOutput, setModalOutput] = useState();

  const handleMoreInfo = (meal) => {
    modalRef.current.open();
    setModalOutput(getMealInfo(meal));
  }

  return (
    <>
    <Modal ref={modalRef} className="md:max-w-[40%]">{modalOutput}</Modal>
    <ul>
      {mealsIDs.length ? (
        mealsIDs.map((mealID, index) => {
          const meal = recipes.filter((recipe) => recipe.id === mealID)[0];
          return (
            <li
              className="group border-b-2 border-slate-300 p-2 relative"
              key={index}
            >
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
              <button className="p-1 absolute invisible right-0 bottom-0 bg-white text-black group-hover:visible" onClick={() => handleMoreInfo(meal)}>
                <span className="material-symbols-outlined">info</span>
              </button>
            </li>
          );
        })
      ) : (
        <p>No meals</p>
      )}
    </ul>
    </>
  );
};

export default MealItems;
