import React, { createContext, useReducer } from "react";

export const MealPlanContext = createContext({
    plan: []
});

const mealPlanReducer = (state, action) => {

}


const MealPlanContextProvider = ({children}) => {
    const [mealPlanState, mealPlanDispatch] = useReducer(mealPlanReducer, {
        plan: [],
    })

    const ctxValue = {
        plan: mealPlanState.plan,
    }

    return (
        <MealPlanContext.Provider value={ctxValue}>
            {children}
        </MealPlanContext.Provider>
    )
}

export default MealPlanContextProvider;