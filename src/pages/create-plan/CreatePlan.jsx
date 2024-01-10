import React, { useRef, useState } from "react";
import CreatePlanForm from "./CreatePlanForm";
import CreatePlanTemplate from "./CreatePlanTemplate";

const CreatePlan = () => {
  const planFormRef = useRef();
  const [mealPlanFormVisibility, setMealPlanFormVisibility] = useState(true);
  const [planTemplate, setPlanTemplate] = useState(false);

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
    setPlanTemplate(false);
  };

  const handleTemplateVisibility = (val) => {
    setPlanTemplate(val);
    setMealPlanFormVisibility(!val);
  };
  return (
    <section>
      <header>
        <h2 className="text-center text-3xl p-5">Meal Plan</h2>
      </header>
      <form className="">
        {mealPlanFormVisibility ? (
          <CreatePlanForm ref={planFormRef}>
            <button onClick={handleCreate}>Create</button>
          </CreatePlanForm>
        ) : (
          <button onClick={handleCancel}>Cancel</button>
        )}
      </form>
      {planTemplate && (
        <CreatePlanTemplate
          template={planTemplate}
          setVisibility={handleTemplateVisibility}
        />
      )}
    </section>
  );
};

export default CreatePlan;
