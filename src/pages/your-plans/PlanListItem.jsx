import React from "react";
import { Link } from "react-router-dom";

const PlanListItem = ({ planInfo }) => {
  const convertDate = (givenDate) => {
    const newDate = new Date(givenDate);
    const day = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <Link to={`/your-plans/${planInfo.id}`}>
    <div className="group flex justify-between items-center w-full p-5 my-2 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 hover:cursor-pointer">
      <div>
        <header>
          <h3 className="text-xl font-bold">{planInfo.title}</h3>
        </header>
        <p className="text-sm text-slate-500">
          Date Created: {convertDate(planInfo.date_created)}, Starting Date: {convertDate(planInfo.start_date)}, Duration: {planInfo.days.length}
        </p>
      </div>
      <div className="flex">
        <span className="material-symbols-outlined group-hover:translate-x-2 transition-translate duration-200">
          trending_flat
        </span>
      </div>
    </div>
    </Link>
  );
};

export default PlanListItem;
