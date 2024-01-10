import React, { createContext, useReducer } from "react";

export const MealPlanContext = createContext({
    plans: [],
    addMealPlan: () => {},
});

const mealPlanReducer = (state, action) => {
    if(action.type === 'ADD_MEALPLAN'){
        const newArr = [
            ...state.plans,
            {
                id: Math.random(),
                planConfig: action.payload
            }
        ];
        return {
            ...state,
            plans: newArr
        }
    }

    return state;
}


const MealPlanContextProvider = ({children}) => {
    const [mealPlanState, mealPlanDispatch] = useReducer(mealPlanReducer, {
        plans: [],
    });

    const addMealPlan = (plan) => {
        console.log(plan);
        mealPlanDispatch({
            type: 'ADD_MEALPLAN',
            payload: plan
        })
    }

    const ctxValue = {
        plans: mealPlanState.plans,
        addMealPlan: addMealPlan
    }

    return (
        <MealPlanContext.Provider value={ctxValue}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default MealPlanContextProvider;