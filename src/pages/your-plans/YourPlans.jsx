import React from "react";
import PlansList from "./PlansList";

const YourPlans = () => {
  return (
    <section>
      <header className="w-full relative p-2 z-50">
        <h2 className="text-center text-5xl font-regular z-50 drop-shadow-md">Your Plans</h2>
        <span class="material-symbols-outlined text-[100px] left-[55%] top-0 m-0 p-0 absolute opacity-10 z-0">event_note</span>
      </header>
      <PlansList />
    </section>
  );
};

export default YourPlans;
