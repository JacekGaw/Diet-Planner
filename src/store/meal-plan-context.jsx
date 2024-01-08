import React, { createContext, useReducer } from "react";
import { SAMPLE_PLAN } from "../SAMPLE_PLAN";

export const MealPlanContext = createContext({
    plans: []
});

const mealPlanReducer = (state, action) => {

}


const MealPlanContextProvider = ({children}) => {
    const [mealPlanState, mealPlanDispatch] = useReducer(mealPlanReducer, {
        plans: [...SAMPLE_PLAN],
    });

    const addMealPlan = () => {
        mealPlanDispatch({
            type: 'ADD_MEALPLAN',
            payload: {

            }
        })
    }

    const ctxValue = {
        plans: mealPlanState.plans,
    }

    return (
        <MealPlanContext.Provider value={ctxValue}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default MealPlanContextProvider;