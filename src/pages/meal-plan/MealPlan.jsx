import React, { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import MealPlanForm from "./MealPlanForm";
import MealPlanTemplate from "./MealPlanTemplate";

const MealPlan = () => {
  const planFormRef = useRef();
  const [mealPlanFormVisibility, setMealPlanFormVisibility] = useState(true);
  const [planTemplate, setPlanTemplate] = useState();

  const handleCreate = (e) => {
    e.preventDefault();
    if (planFormRef.current.getPlanInfo() !== undefined) {
      setMealPlanFormVisibility(false);
      const planInfo = planFormRef.current.getPlanInfo();
      let durationInt = 0;
      if (planInfo.duration === "day") durationInt = 1;
      else if (planInfo.duration === "week") durationInt = 7;
      else if (planInfo.duration === "month") durationInt = 31;
      setPlanTemplate({
        duration: durationInt,
        startDate: planInfo.startDate,
      });
    }
  };

  const handleCancel = () => {
    setMealPlanFormVisibility(true);
    setPlanTemplate();
  };

  // Plan na dalsze działanie to wyświetlenie template
  return (
    <section>
      <header>
        <h2 className="text-center text-3xl p-5">Meal Plan</h2>
      </header>
      <form className="">
        {mealPlanFormVisibility ? (
          <MealPlanForm ref={planFormRef}>
            <button onClick={handleCreate}>Create</button>
          </MealPlanForm>
        ) : (
          <button onClick={handleCancel}>Cancel</button>
        )}
      </form>
      {planTemplate ? <MealPlanTemplate template={planTemplate} /> : ""}
    </section>
  );
};

export default MealPlan;
