import React from "react";

const AddRecipe = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
        <label>Recipe title:</label>
        <input type="text"></input>
        <label>Recipe category:</label>
        <select>
            <option value="sweet">Sweet</option>
            <option value="snack">Snack</option>
            <option value="main">Main Dish</option>
        </select>
        <label>Recipe description:</label>
        <textarea className="whitespace-pre-line"></textarea>
        
    </form>
    // Dodać kolejne inputy
  );
};

export default AddRecipe;
