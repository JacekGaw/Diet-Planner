import React from "react";

const PlanListItem = ({ planInfo }) => {
  return (
    <div className="group flex justify-between items-center w-full p-5 my-2 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer">
      <div>
        <header>
          <h3 className="text-xl font-bold">{planInfo.title ? planInfo.title : `Plan Created on ${planInfo.date_created}`}</h3>
        </header>
        <p className="text-sm text-slate-500">
          Date Created: {planInfo.date_created}, Starting Date: {planInfo.start_date}, Duration: {planInfo.days.length}
        </p>
      </div>
      <div className="flex">
        <span className="material-symbols-outlined group-hover:translate-x-2 transition-translate duration-200">
          trending_flat
        </span>
      </div>
    </div>
  );
};

export default PlanListItem;
