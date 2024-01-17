import React, { useRef, useState } from "react";
import CreatePlanForm from "./CreatePlanForm";
import CreatePlanTemplate from "./CreatePlanTemplate";
import Button from "../../components/UI/Button";

const CreatePlan = () => {
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
      <header className="p-2 relative mb-10">
        <h2 className="text-center text-4xl font-regular z-50 drop-shadow-md">Meal Plan</h2>
        <div className="material-symbols-outlined text-[80px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0">
edit_square
</div>
      </header>
      <form className="">
        {mealPlanFormVisibility ? (
          <CreatePlanForm ref={planFormRef}>
            <Button onClick={handleCreate}>Create</Button>
          </CreatePlanForm>
        ) : (
          <button onClick={handleCancel}>Cancel</button>
        )}
      </form>
      {planTemplate ? <CreatePlanTemplate template={planTemplate} /> : ""}
    </section>
  );
};

export default CreatePlan;
