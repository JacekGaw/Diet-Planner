import React, { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import MealPlanForm from "./MealPlanForm";

const MealPlan = () => {
const planFormRef = useRef();

const handleClick = () => {
    console.log(planFormRef.current.getPlanInfo());
}

  return (
    <section>
      <header>
        <h2 className="text-center text-3xl p-5">Meal Plan</h2>
      </header>
        <MealPlanForm ref={planFormRef}/>
        <button onClick={handleClick}>give info</button>
    </section>
  );
};

export default MealPlan;
