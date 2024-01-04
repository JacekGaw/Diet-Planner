import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';

const MealPlanForm = forwardRef((props, ref) => {

    const planDurationRef = useRef();
  const dateRef = useRef();
  const [planDuration, setPlanDuration] = useState();
  const [startDate, setStartDate] = useState();
  const [dateError, setDateError] = useState();

  useImperativeHandle(
    ref,
    () => {
      return {
        getPlanInfo() {
          return {
            duration: planDuration,
            startDate: startDate
          }
        },
      };
    }, [startDate, planDuration]);

  const handleSave = (e) => {
    e.preventDefault();
    const pickDate = new Date(dateRef.current.value).toLocaleDateString();
    if (pickDate < new Date().toLocaleDateString() || pickDate === "Invalid Date") {
      setDateError("Date is incorrect!");
    } else {
      setDateError(undefined);
      setStartDate(pickDate);
      setPlanDuration(planDurationRef.current.value);
    }
  };
    return (
        <form className="flex justify-center items-center">
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
          <p className="text-red-600">{dateError}</p>
          <button
            onClick={handleSave}
            className="border border-slate-500 rounded-sm p-2"
          >
            Create
          </button>
        </div>
      </form>
    );
})
 
export default MealPlanForm;