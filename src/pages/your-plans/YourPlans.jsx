import React, {useState} from "react";
import PlansList from "./PlansList";
import PlanView from "./PlanView";

const YourPlans = () => {
  const [clickedID, setClickedID] = useState();

  const handlePlanClick = (planID) => {
    setClickedID(planID);
  }


  return (
    <section>
      <header className="w-full relative p-2 z-50">
        <h2 className="text-center text-4xl font-regular z-50 drop-shadow-md">
          Your Plans
        </h2>
        <span className="material-symbols-outlined text-[80px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0">
          event_note
        </span>
      </header>
      <section className="mt-10 w-full align-center">
        {!clickedID ? <PlansList onPlanClick={handlePlanClick} /> : <PlanView planID={clickedID}/>}
        
      </section>
    </section>
  );
};

export default YourPlans;
