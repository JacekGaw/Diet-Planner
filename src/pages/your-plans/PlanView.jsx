import React, { useContext } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import { RecipesContext } from "../../store/recipes-context";
import PlanDayCard from "../../components/UI/PlanDayCard.jsx";
import { useParams } from "react-router-dom";

const PlanView = () => {
    const { planIDparam } = useParams();
  const { plans } = useContext(MealPlanContext);
  const { recipes } = useContext(RecipesContext);
  const plan = plans.filter((plan) => plan.id.toString() === planIDparam.toString())[0];

  return (
    <div>
      {plan.days.map((day, index) => {
        console.log(day.recipesIDs);
        return (
          <PlanDayCard
          key={index}
            index={index}
            date={plan.start_date}
            dayInfo={day.recipesIDs}
          ></PlanDayCard>
        );
      })}
    </div>
  );
};

export default PlanView;
