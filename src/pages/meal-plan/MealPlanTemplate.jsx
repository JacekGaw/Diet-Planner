import React, { useState, useEffect } from "react";
import PlanDay from "../../components/UI/PlanDayCard";
const moment = require("moment");

const MealPlanTemplate = ({ template }) => {
  const [duration, setDuration] = useState();
  useEffect(() => {
    let durationDate = template.duration;
    if (durationDate === "day") setDuration(1);
    else if (durationDate === "week") setDuration(7);
    else if (durationDate === "month") setDuration(31);
  }, []);
  let daysArray = new Array(duration).fill('a');

  // let futureDate = new Date();
  // futureDate = futureDate.setDate(startDate.getDate()+30);
  // console.log(new Date(futureDate));
  return (
    <>
      <div className="m-5 flex w-full overflow-x-auto">
        {daysArray.map((day, index) => {
          return <PlanDay key={index} index={index} date={template.startDate}></PlanDay>
        })}
      </div>
    </>
  );
};

export default MealPlanTemplate;
