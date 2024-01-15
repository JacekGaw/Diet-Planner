import React, { useContext, useEffect, useRef, useState } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import { RecipesContext } from "../../store/recipes-context.jsx";
import PlanDayCard from "../../components/UI/PlanDayCard.jsx";
import { useParams } from "react-router-dom";
import MealItems from "./MealItems.jsx";
import Button from "../../components/UI/Button.jsx";
import Modal from "../../components/UI/Modal.jsx";
import { useNavigate } from "react-router-dom";
import RouteError from "../../components/RouteError.jsx";
import {generateShoppingList} from "../../hooks/useGenerateShoppingList.js"

const PlanView = () => {
  let navigate = useNavigate();
  const { plans, deleteMealPlan } = useContext(MealPlanContext);
  const {recipes} = useContext(RecipesContext);
  const modalRef = useRef();
  const [list, setList] = useState();
  const { planIDparam } = useParams();
  const [shoppingList, setShoppingList] = useState();
  const plan = plans.filter(
    (plan) => plan.id.toString() === planIDparam.toString()
  )[0];

  const handleClickDelete = () => {
    modalRef.current.open();
  };
  const handleDelete = () => {
    deleteMealPlan(plan.id);
    return navigate("/your-plans", { replace: true });
  };

  const handleBackClick = () => {
    navigate("/your-plans");
  }

  const handleShoppingListClick = (planID) => {
    const ing = generateShoppingList(planID, plans, recipes);
    console.log(ing);

  };
  return (
    <div>
      {plans.filter(
        (plan) => plan.id.toString() === planIDparam.toString()
      )[0] !== undefined ? (
        <>
          <Modal ref={modalRef}>
            <p className="font-medium text-xl">
              Are you sure you want to delete this diet plan?
            </p>
            <p className="text-slate-500">You will delete: {plan.title}</p>
            <div className="flex justify-center mt-5">
              <Button
                className={`bg-red-800 p-5 text-md font-bold`}
                onClick={handleDelete}
              >
                Yes, delete
              </Button>
            </div>
          </Modal>
          <section>
            <button onClick={handleBackClick} className="group p-1">
              <span className="material-symbols-outlined text-2xl group-hover:-translate-x-1 transition-translate duration-200">keyboard_backspace</span>
            </button>
            <header className="flex justify-between items-center border-b-2 border-slate-200 py-2">
              <h2 className="text-3xl font-bold">{plan.title}</h2>
              <div className="flex">
                <Button
                  className={`mb-0 mr-2`}
                  onClick={() => handleShoppingListClick(plan.id)}
                >
                  Shopping List
                </Button>
                <Button
                  onClick={handleClickDelete}
                  className="mb-0 p-0 text-sm"
                >
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </div>
            </header>
            <div className="py-5 flex w-full overflow-x-auto">
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
          </section>
        </>
      ) : (
        <RouteError />
      )}
    </div>
  );
};

export default PlanView;
