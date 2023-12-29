import React, { useRef } from "react";
import Input from "../../components/UI/Input";

const AddRecipe = () => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();
  const carbRef = useRef();
  const caloriesRef = useRef();

  const handleSave = () => {
    console.log(titleRef.current.value);
    console.log(categoryRef.current.value);
    console.log(descRef.current.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input label="Recipe title:" inputType="text" ref={titleRef} />
      <label>Recipe category:</label>
      <select ref={categoryRef}>
        <option value="sweet">Sweet</option>
        <option value="snack">Snack</option>
        <option value="main">Main Dish</option>
      </select>
      <label>Recipe description:</label>
      <textarea className="whitespace-pre-line" ref={descRef}></textarea>
      <Input label="Proteins:" inputType="number" ref={proteinRef} />
      <Input label="Fats:" inputType="number" ref={fatsRef} />
      <Input label="Carbohydrates:" inputType="number" ref={carbRef} />
      <Input label="Calories:" inputType="number" ref={caloriesRef} />

      <button type="submit" onClick={handleSave}>
        Done
      </button>
    </form>
    // Dodać kolejne inputy
  );
};

export default AddRecipe;
