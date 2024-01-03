import React, { createContext, useReducer } from "react";
import { SAMPLE_RECIPES } from "../SAMPLE_RECIPES";

export const RecipesContext = createContext({
  recipes: [],
  recipeAdd: () => {},
});

const recipesReducer = (state, action) => {
  if (action.type === "ADD_RECIPE") {
    const newArr = [
      ...state.recipes,
      {
        id: Math.random(),
        title: action.payload.title,
        category: action.payload.category,
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
  //   if (action.type === "ADD_PROJECT") {
  //     const newArr = [
  //       ...state.projectList,
  //       {
  //         id: Math.random(),
  //         title: action.payload.title,
  //         desc: action.payload.desc,
  //         date: action.payload.date,
  //         todos: [],
  //       },
  //     ];

  //     return {
  //       ...state,
  //       projectList: newArr,
  //     };
  //   }
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

  const ctxValue = {
    recipes: recipesState.recipes,
    recipeAdd: addRecipe,
  };

  return (
    <RecipesContext.Provider value={ctxValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
