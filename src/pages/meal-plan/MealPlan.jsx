import React, { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import MealPlanForm from "./MealPlanForm";
import MealPlanTemplate from "./MealPlanTemplate";

const MealPlan = () => {
  const planFormRef = useRef();
  const [planTemplate, setPlanTemplate] = useState({duration: null, startDate: null});

  const handleClick = (e) => {
    e.preventDefault();
    if(planFormRef.current.getPlanInfo() !== undefined){
        const planInfo = planFormRef.current.getPlanInfo()
        setPlanTemplate({duration: planInfo.duration, startDate: planInfo.startDate});
    }

  };

  // Plan na dalsze działanie to wyświetlenie template
  return (
    <section>
      <header>
        <h2 className="text-center text-3xl p-5">Meal Plan</h2>
      </header>
      <form className="">
        <MealPlanForm ref={planFormRef} />
        <button onClick={handleClick}>Create</button>
      </form>
      <MealPlanTemplate template={planTemplate}/>
    </section>
  );
};

export default MealPlan;
