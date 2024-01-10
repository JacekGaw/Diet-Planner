import React, { createContext, useReducer } from "react";
import { SAMPLE_RECIPES } from "../SAMPLE_RECIPES";

export const RecipesContext = createContext({
  recipes: [],
  recipeAdd: () => {},
  recipeDelete: () => {},
  returnMacro: () => {},
});

const recipesReducer = (state, action) => {
  if (action.type === "ADD_RECIPE") {

    const newArr = [
      ...state.recipes,
      {
        id: Math.random(),
        add_date: new Date().toLocaleDateString("de-DE"),
        title: action.payload.title,
        category: action.payload.category,
        description: action.payload.description,
        proteins: action.payload.proteins,
        fats: action.payload.fats,
        carbohydrates: action.payload.carbohydrates,
        calories: action.payload.calories,
        ingredients: action.payload.ingredients
      },
    ];
    return {
      ...state,
      recipes: newArr,
    };
  }
  if (action.type === "DELETE_RECIPE") {
    const newArr = state.recipes.filter(
      (recipe) => recipe.id !== action.payload
    );
    return {
      ...state,
      recipes: newArr,
    };
  }
  if (action.type === "RETURN_MACRO") {
    let macroCount = 0;

    return macroCount;

  }
  return state;
};

const RecipesContextProvider = ({ children }) => {
  const [recipesState, recipesDispatch] = useReducer(recipesReducer, {
    recipes: [...SAMPLE_RECIPES],
  });

  const addRecipe = (recipeInfo) => {
    recipesDispatch({
      type: "ADD_RECIPE",
      payload: recipeInfo,
    });
  };

  const deleteRecipe = (recipeID) => {
    recipesDispatch({
      type: "DELETE_RECIPE",
      payload: recipeID,
    });
  };

  const returnMacro = (recipe) => {
    recipesDispatch({
      type: "RETURN_MACRO",
      payload: recipe
    });
  };

  const ctxValue = {
    recipes: recipesState.recipes,
    recipeAdd: addRecipe,
    recipeDelete: deleteRecipe,
    returnMacro: returnMacro,
  };

  return (
    <RecipesContext.Provider value={ctxValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
