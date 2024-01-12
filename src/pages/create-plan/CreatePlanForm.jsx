import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const moment = require('moment');

const CreatePlanForm = forwardRef(({children}, ref) => {
  const planDurationRef = useRef();
  const dateRef = useRef();
  const [error, setError] = useState();

  useImperativeHandle(
    ref,
    () => {
      return {
        getPlanInfo() {
          console.log(dateRef.current.value);
          if (moment(dateRef.current.value).isSameOrAfter(moment().startOf('day'))) {
            setError('');
            return {
              duration: planDurationRef.current.value,
              startDate: new Date(dateRef.current.value),
            };
          } else {
            setError("Date is incorrect!");
          }
        },
      };
    },
    []
  );

  return (
    <div>
      <div>
        <label>Create Your meal plan for:</label>
        <select
          ref={planDurationRef}
          className="mx-2 p-2 border border-slate-700"
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </div>
      <div>
        <label>Starting date:</label>
        <input
          type="date"
          className="p-2 border border-slate-200 mx-2"
          ref={dateRef}
        ></input>
      </div>
      <p className="text-red-">{error}</p>
      {children}
    </div>
  );
});

export default CreatePlanForm;
