import React, { createContext, useReducer } from "react";
import { SAMPLE_PLAN } from "../SAMPLE_PLAN";

export const MealPlanContext = createContext({
  plans: [],
  addMealPlan: () => {},
});

const convertDate = (givenDate) => {
  const newDate = new Date(givenDate);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${day}.${month}.${year}`;
};

const mealPlanReducer = (state, action) => {
  if (action.type === "ADD_MEALPLAN") {
    const newArr = [
      ...state.plans,
      {
        id: Math.random(),
        date_created: convertDate(new Date()),
        start_date: convertDate(action.payload.start_date),
        title: action.payload.title,
        days: action.payload.plan,
      },
    ];
    return {
      ...state,
      plans: newArr,
    };
  }

  return state;
};

const MealPlanContextProvider = ({ children }) => {
  const [mealPlanState, mealPlanDispatch] = useReducer(mealPlanReducer, {
    plans: [...SAMPLE_PLAN],
  });

  const addMealPlan = (plan, title, start_date) => {
    console.log(plan);
    mealPlanDispatch({
      type: "ADD_MEALPLAN",
      payload: {
        plan,
        title,
        start_date,
      },
    });
  };

  const ctxValue = {
    plans: mealPlanState.plans,
    addMealPlan: addMealPlan,
  };

  return (
    <MealPlanContext.Provider value={ctxValue}>
      {children}
    </MealPlanContext.Provider>
  );
};

export default MealPlanContextProvider;
