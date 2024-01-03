import React, { useState, useRef, forwardRef } from "react";

const AddRecipeIngredients = forwardRef((props, ref) => {
  const [ingredients, setIngredients] = useState([]);
  ref = ingredients;
  const ingredientRef = useRef();
  const amountRef = useRef();
  const unitRef = useRef();

  const handleAddIngredient = () => {
    setIngredients((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          ingredient: ingredientRef.current.value,
          amount: amountRef.current.value,
          unit: unitRef.current.value,
        },
      ];
    });
    ingredientRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <>
      <h3>Ingredients ({ingredients.length}):</h3>
      <div>
        <label>Ingredient</label>
        <input type="text" ref={ingredientRef} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="0" ref={amountRef} />
      </div>
      <div>
        <label>Unit</label>
        <select ref={unitRef}>
          <option value="g">g</option>
          <option value="ml">ml</option>
        </select>
      </div>
      <button onClick={handleAddIngredient}>Save Ingredient</button>
    </>
  );
});

export default AddRecipeIngredients;
