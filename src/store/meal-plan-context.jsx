import React, { createContext, useReducer } from "react";
import { SAMPLE_PLAN } from "../SAMPLE_PLAN";

export const MealPlanContext = createContext({
    plans: [],
    addMealPlan: () => {},
});

const mealPlanReducer = (state, action) => {
    if(action.type === 'ADD_MEALPLAN'){
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth()+1;
        const year = now.getFullYear();
        const newArr = [
            ...state.plans,
            {
                id: Math.random(),
                date_created: `${day}.${month}.${year}`,
                title: action.payload.title,
                days: action.payload.plan
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
        plans: [...SAMPLE_PLAN],
    });

    const addMealPlan = (plan, title) => {
        console.log(plan);
        mealPlanDispatch({
            type: 'ADD_MEALPLAN',
            payload: {
                plan,
                title,
            }
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