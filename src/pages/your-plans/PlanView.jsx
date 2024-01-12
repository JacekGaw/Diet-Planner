import React, { useContext } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import PlanDayCard from "../../components/UI/PlanDayCard.jsx";
import { useParams } from "react-router-dom";
import MealItems from "./MealItems.jsx";

const PlanView = () => {
  const { planIDparam } = useParams();
  const { plans } = useContext(MealPlanContext);
  
  const plan = plans.filter(
    (plan) => plan.id.toString() === planIDparam.toString()
  )[0];

  return (
    <div className="p-5 flex w-full overflow-x-auto">
      {plan.days.map((day, index) => {
        return (
          <PlanDayCard
            key={index}
            index={index}
            date={plan.start_date}
            dayInfo={day.recipesIDs}
          >
            <MealItems mealsIDs={day.recipesIDs} />
          </PlanDayCard>
        );
      })}
    </div>
  );
};

export default PlanView;
