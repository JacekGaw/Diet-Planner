import React, { useState } from "react";

const MealPlanTemplate = ({ template }) => {
  const startDate = template.startDate;
  let duration = template.duration;
  if (duration === "day") duration = 1;
  else if (duration === "week") duration = 7;
  else if(duration ==='month') duration = 31;

  return (
    <>
      <p>{duration}</p>
    </>
  );
};

export default MealPlanTemplate;
