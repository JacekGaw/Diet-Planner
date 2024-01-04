import React, { useRef, useState } from "react";
import Modal from "../../components/UI/Modal";
import Input from "../../components/UI/Input";

const MealPlan = () => {
  const planDurationRef = useRef();
  const dateRef = useRef();
  const [planDuration, setPlanDuration] = useState();
  const [dateError, setDateError] = useState();

  const handleSave = (e) => {
    e.preventDefault();
    const pickDate = new Date(dateRef.current.value).toLocaleDateString();
    console.log(pickDate);
    if (pickDate < new Date().toLocaleDateString() || pickDate === "Invalid Date") {
      setDateError("Date is incorrect!");
    } else {
      setDateError(undefined);
      setPlanDuration(planDurationRef.current.value);
    }
  };

  return (
    <section>
      <header>
        <h2 className="text-center text-3xl p-5">Meal Plan</h2>
      </header>
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
    </section>
  );
};

export default MealPlan;
