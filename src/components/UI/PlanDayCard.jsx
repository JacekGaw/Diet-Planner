import React, { useContext } from "react";
import { RecipesContext } from "../../store/recipes-context";

const PlanDayCard = ({ index, date, dayInfo, children }) => {
  const {recipes, returnMacro} = useContext(RecipesContext);

  let helperDate = new Date();
  helperDate = helperDate.setDate(date.getDate() + index);

  const dateOjb = {
    day: new Date(helperDate).getDate(),
    month: new Date(helperDate).getMonth() + 1,
    year: new Date(helperDate).getFullYear(),
  };

  const dayMacros = () => { 
    if(dayInfo.length > 0) {
      returnMacro(dayInfo);
    }
    // console.log(info);
  };

  return (
    <div className="min-w-36 max-w-sm shrink-0 border border-dark-green">
      <header className="w-full bg-dark-green text-white p-2 text-center">
        <h4 className="text-xl font-semibold">Day: {index + 1}</h4>
        <h6 className="text-sm font-light">
          {dateOjb.day}-{dateOjb.month}-{dateOjb.year}
        </h6>
      </header>
      <div className="p-2 px-5 flex justify-center">
        <p>{}</p>
      </div>
      <div className="min-h-64 bg-white">{children}</div>
    </div>
  );
};

export default PlanDayCard;
