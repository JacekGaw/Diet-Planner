import React, { createContext, useReducer } from "react";

export const RecipesContext = createContext({
  recipes: [],
  recipeAdd: () => {},
});

const recipesReducer = (state, action) => {
  if(action.type === "ADD_RECIPE"){
    const newArr = [
      ...state.recipes,
      {
        id: Math.random(),
        title: action.payload.title,
        category: action.payload.category
      }
    ]
    return {
      ...state,
      recipes: newArr
    }
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
    recipes: []
  });

  const addRecipe = (recipeInfo) => {
    recipesDispatch({
      type: "ADD_RECIPE",
      payload: recipeInfo,
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