import React, { useContext, useEffect } from "react";
import { RecipesContext } from "../../store/recipes-context";

const PlanDayCard = ({ index, date, dayInfo, children }) => {
  const { recipes } = useContext(RecipesContext);
  let helperDate = new Date();
  helperDate = helperDate.setDate(date.getDate() + index);

  const dateOjb = {
    day: new Date(helperDate).getDate(),
    month: new Date(helperDate).getMonth() + 1,
    year: new Date(helperDate).getFullYear(),
  };

  const getMacro = (macro) => {
    let givenMacro = 0;
    if (dayInfo.length > 0) {
      dayInfo.map((recipeID) => {
        if (macro === "proteins") {
          return (givenMacro += recipes.filter(
            (recipe) => recipe.id === recipeID
          )[0].proteins);
        } else if (macro === "fats") {
          return (givenMacro += recipes.filter(
            (recipe) => recipe.id === recipeID
          )[0].fats);
        } else if (macro === "carbohydrates") {
          return (givenMacro += recipes.filter(
            (recipe) => recipe.id === recipeID
          )[0].carbohydrates);
        } else if (macro === "calories") {
          return (givenMacro += recipes.filter(
            (recipe) => recipe.id === recipeID
          )[0].calories);
        }
      });
      return givenMacro;
    } else return 0;
  };

  return (
    <div className="min-w-36 max-w-sm shrink-0 border border-dark-green">
      <header className="w-full bg-dark-green text-white p-2 text-center">
        <h4 className="text-xl font-semibold">Day: {index + 1}</h4>
        <h6 className="text-sm font-light">
          {dateOjb.day}.{dateOjb.month}.{dateOjb.year}
        </h6>
      </header>
      <div className="p-1 px-5 flex justify-center gap-2 text-xs font-light">
        <p>P:{getMacro("proteins")}g</p>
        <p>F:{getMacro("fats")}g</p>
        <p>C:{getMacro("carbohydrates")}g</p>
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
