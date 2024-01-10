import React from "react";

const PlanDayCard = ({ index, date, dayInfo, children }) => {
  let helperDate = new Date();
  helperDate = helperDate.setDate(date.getDate() + index);

  const dateOjb = {
    day: new Date(helperDate).getDate(),
    month: new Date(helperDate).getMonth() + 1,
    year: new Date(helperDate).getFullYear(),
  };

  const getMacro = (macro) => {
    let returnVal = 0;
    dayInfo.map((singleRecipe) => {
      if (macro === "proteins") {
        return (returnVal += singleRecipe.proteins);
      } else if (macro === "fats") {
        return (returnVal += singleRecipe.fats);
      }
      else if (macro === "carbohydrates") {
        return (returnVal += singleRecipe.carbohydrates);
      }
      else if (macro === "calories") {
        return (returnVal += singleRecipe.calories);
      }
    });

    return returnVal;
  };

  return (
    <div className="min-w-36 max-w-sm shrink-0 border border-dark-green">
      <header className="w-full bg-dark-green text-white p-2 text-center">
        <h4 className="text-xl font-semibold">Day: {index + 1}</h4>
        <h6 className="text-sm font-light">
          {dateOjb.day}-{dateOjb.month}-{dateOjb.year}
        </h6>
      </header>
      <div className="p-1 px-5 flex justify-center gap-2 text-xs font-light">
        <p>P:{getMacro("proteins")}</p>
        <p>F:{getMacro("fats")}</p>
        <p>C:{getMacro("carbohydrates")}</p>
        <p>{getMacro("calories")}kcal</p>
      </div>
      <p className="text-center text-xs font-light pb-1">
        {dayInfo.length} meals
      </p>
      <div className="min-h-64 bg-white">{children}</div>
    </div>
  );
};

export default PlanDayCard;
