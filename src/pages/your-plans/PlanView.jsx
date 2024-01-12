import React, { useContext } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import { RecipesContext } from "../../store/recipes-context";
import PlanDayCard from "../../components/UI/PlanDayCard.jsx"

const PlanView = ({planID}) => {
    const {plans} = useContext(MealPlanContext);
    const { recipes} = useContext(RecipesContext);
    const plan = plans.filter(plan => plan.id === planID)[0];
    console.log(plan.days)

    return (
        <div>
        {plan.days.map((day, index) => {
            return <PlanDayCard index={index} date={new Date(day.start_date)} dayInfo={day}></PlanDayCard>
        })}
        <p>{planID}</p>
        </div>
    );
};

export default PlanView;