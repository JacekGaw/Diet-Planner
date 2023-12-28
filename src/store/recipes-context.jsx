import React, { createContext, useReducer } from "react";

export const RecipesContext = createContext({
  recipes: [],
});

const recipesReducer = (state, action) => {
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
    recipes: ["HEj"]
  });

//   const addProject = (projectInfo) => {
//     projectsDispatch({
//       type: "ADD_PROJECT",
//       payload: projectInfo,
//     });
//   };

  const ctxValue = {
    recipes: recipesState.recipes,
  };

  return (
    <RecipesContext.Provider value={ctxValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;