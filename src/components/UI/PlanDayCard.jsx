import React from "react";

const PlanDay = ({ index, date, children }) => {
  let helperDate = new Date();
  helperDate = helperDate.setDate(date.getDate() + index);
  const dateOjb = {
    day: new Date(helperDate).getDate(),
    month: new Date(helperDate).getMonth() + 1,
    year: new Date(helperDate).getFullYear(),
  };

  return (
    <div className="min-w-36 max-w-sm shrink-0 border border-dark-green">
      <header className="w-full bg-dark-green text-white p-2 text-center">
        <h4 className="text-xl font-semibold">Day: {index + 1}</h4>
        <h6 className="text-sm font-light">
          {dateOjb.day}-{dateOjb.month}-{dateOjb.year}
        </h6>
      </header>
      <div className="min-h-64 bg-white">{children}</div>
    </div>
  );
};

export default PlanDay;
