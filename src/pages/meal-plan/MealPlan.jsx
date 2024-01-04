import React, { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import MealPlanForm from "./MealPlanForm";

const MealPlan = () => {
  const planFormRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(planFormRef.current.getPlanInfo());
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
    </section>
  );
};

export default MealPlan;
