import React, { useContext, useRef } from "react";
import { RecipesContext } from "../../store/recipes-context";
import Modal from "../../components/UI/Modal";
import { getMealInfo } from "../../helpers/getMealInfo";

const RecipeCard = ({ recipeInfo, className }) => {
  const modalRef = useRef();
  const { recipeDelete } = useContext(RecipesContext);

  const handleMoreInfo = (recipeInfo) => {
    modalRef.current.open();
  };

  return (
    <>
      <Modal ref={modalRef} className="md:max-w-[40%]">
        {getMealInfo(recipeInfo)}
      </Modal>
      <li className={className}>
        <div>
          <header className="bg-dark-green rounded-t-lg p-3 text-white">
            <h4 className="text-xl text-center">{recipeInfo.title}</h4>
            <p className="text-light-green capitalize text-sm text-center">
              {recipeInfo.category}
            </p>
          </header>

          <div className="flex justify-center p-2 mb-2 text-sm font-semibold bg-light-green">
            <p className="mx-1">P: {recipeInfo.proteins}</p>
            <p className="mx-1">F: {recipeInfo.fats}</p>
            <p className="mx-1">C: {recipeInfo.carbohydrates}</p>
            <p className="mx-1">Calories: {recipeInfo.calories}</p>
          </div>
          <div className="flex flex-col justify-between items-start relative">
            <p className="text-[12px] leading-4 px-3 text-justify">
              <strong>Description: </strong>
              {recipeInfo.description}
            </p>
            <p className="p-3">
              <strong>Ingredients: </strong>
              {recipeInfo.ingredients.length}
            </p>
          </div>
        </div>
        <div className="flex justify-between p-3 pt-0">
          <button
            onClick={() => recipeDelete(recipeInfo.id)}
            className="p-2 font-light text-sm bg-dark-green rounded text-white"
          >
            Delete Recipe
          </button>
          <button
            className="p-2 font-light text-sm bg-dark-green rounded text-white"
            onClick={handleMoreInfo}
          >
            More Info
          </button>
        </div>
      </li>
    </>
  );
};

export default RecipeCard;
