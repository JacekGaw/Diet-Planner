import React, { useContext, useRef } from "react";
import { MealPlanContext } from "../../store/meal-plan-context";
import PlanDayCard from "../../components/UI/PlanDayCard.jsx";
import { useParams } from "react-router-dom";
import MealItems from "./MealItems.jsx";
import Button from "../../components/UI/Button.jsx";
import Modal from "../../components/UI/Modal.jsx";
import { useNavigate } from "react-router-dom";
import RouteError from '../../components/RouteError.jsx'



const PlanView = () => {
  let navigate = useNavigate();
  const { plans, deleteMealPlan } = useContext(MealPlanContext);
  const modalRef = useRef();
  const { planIDparam } = useParams();
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

  return (
    <div>
    {(plans.filter((plan) => plan.id.toString() === planIDparam.toString())[0]) !== undefined ?  
      <><Modal ref={modalRef}>
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
        <header>
          <h2>{plan.title}</h2>
          <div>
            <Button onClick={handleClickDelete}>Delete</Button>
            <Button>Shopping List</Button>
          </div>
        </header>
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
      </section>
      </>
      : <RouteError />}
      </div>
  );
};

export default PlanView;
