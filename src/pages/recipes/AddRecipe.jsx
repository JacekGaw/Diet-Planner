import React, { useRef, useState, useContext } from "react";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import AddRecipeIngredients from "./AddRecipeIngredients";
import Button from "../../components/UI/Button";

const AddRecipe = () => {
  const { recipeAdd } = useContext(RecipesContext);
  const modal = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();
  const carbRef = useRef();
  const caloriesRef = useRef();
  const [errorMessage, setErrorMessage] = useState();
  const ingredientsRef = useRef();

  const handleSave = () => {
    console.log(titleRef.current.value === '');
    if (
      titleRef.current.value.trim() === '' ||
      proteinRef.current.value.trim() === '' ||
      fatsRef.current.value.trim() === '' ||
      carbRef.current.value.trim() === '' ||
      caloriesRef.current.value.trim() === ''
    ) {
      setErrorMessage(<p className="mb-5 text-red-700">"Fields cannot be empty!"</p>);
      modal.current.open();
    } else {
      recipeAdd({
        title: titleRef.current.value,
        category: categoryRef.current.value,
        description: descRef.current.value,
        proteins: parseInt(proteinRef.current.value),
        fats: parseInt(fatsRef.current.value),
        carbohydrates: parseInt(carbRef.current.value),
        calories: parseInt(caloriesRef.current.value),
        ingredients: ingredientsRef.current.getIngredients()
      });    
    }
  };

  return (
    <>
      <Modal ref={modal}>{errorMessage}</Modal>
      <section className="mb-5 rounded-lg p-5">
        <header>
          <h3 className="text-center text-xl mb-5">Add recipe to your recipe book:</h3>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mx-5 rounded-md p-5 flex flex-col border-2 border-slate-300"
        >
            <Input
              label="Recipe title:"
              inputType="text"
              ref={titleRef}
              labelClass="text-sm"
              inputClass="border-b-2 border-b-dark-green p-1 rounded-sm"
              placeholder="Recipe title"
            />
            <label className="text-sm mt-2">Recipe category:</label>
            <select ref={categoryRef} className="border-b-2 border-b-dark-green rounded-sm py-1 mb-2">
              <option value="sweet">Sweet</option>
              <option value="snack">Snack</option>
              <option value="main">Main Dish</option>
            </select>
          <label className="text-sm">Recipe description:</label>
          <textarea
            className="whitespace-pre-line border-2 border-dark-green rounded-sm"
            ref={descRef}
          ></textarea>
          <div className="flex w-full justify-between gap-4 mt-2">
            <Input
              label="Proteins:"
              inputType="number"
              ref={proteinRef}
              min="0"
              inputClass="max-w-[100px] border-b-2 border-b-dark-green p-1 rounded-sm"
              labelClass="text-sm"
            />
            <Input
              label="Fats:"
              inputType="number"
              ref={fatsRef}
              min="0"
              inputClass="max-w-[100px] border-b-2 border-b-dark-green p-1 rounded-sm"
              labelClass="text-sm"
            />
            <Input
              label="Carbohydrates:"
              inputType="number"
              ref={carbRef}
              min="0"
              inputClass="max-w-[100px] border-b-2 border-b-dark-green p-1 rounded-sm"
              labelClass="text-sm"
            />
          </div>
          <Input
            label="Calories:"
            inputType="number"
            ref={caloriesRef}
            min="0"
            inputClass="max-w-[100px] border-b-2 border-b-dark-green p-1 rounded-sm"
            labelClass="text-sm mt-2"
          />
          <AddRecipeIngredients ref={ingredientsRef} />
          <Button type="submit" onClick={handleSave}>
            Done
          </Button>
        </form>
      </section>
    </>
    // Dodać kolejne inputy
  );
};

export default AddRecipe;
