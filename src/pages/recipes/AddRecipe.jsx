import React, { useRef, useState, useContext } from "react";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";
import AddRecipeIngredients from "./AddRecipeIngredients";

const AddRecipe = ({ visibility }) => {
  const { recipeAdd } = useContext(RecipesContext);
  const modal = useRef();
  const titleRef = useRef();
  const categoryRef = useRef();
  const descRef = useRef();
  const proteinRef = useRef();
  const fatsRef = useRef();
  const carbRef = useRef();
  const caloriesRef = useRef();
  const [modalInfo, setModalInfo] = useState();
  const ingredientsRef = useRef();

  const handleSave = () => {
    if (
      titleRef.current.value.trim() === 0 ||
      proteinRef.current.value.trim() === 0 ||
      fatsRef.current.value.trim() === 0 ||
      carbRef.current.value.trim() === 0 ||
      caloriesRef.current.value.trim() === 0
    ) {
      setModalInfo(<p>"Fields cannot be empty!"</p>);
      modal.current.open();
    } else {
      recipeAdd({
        title: titleRef.current.value,
        category: categoryRef.current.value,
        description: descRef.current.value,
        proteins: proteinRef.current.value,
        fats: fatsRef.current.value,
        carbohydrates: carbRef.current.value,
        calories: caloriesRef.current.value,
        ingredients: ingredientsRef.current.getIngredients()
      });
      visibility(false);     
    }
  };

  return (
    <>
      <Modal ref={modal}>{modalInfo}</Modal>
      <section className="mb-5 bg-dark-green rounded-lg p-5">
        <header>
          <h3 className="text-center text-white">Add recipe to your recipe book:</h3>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mx-5 bg-slate-200 rounded-md p-5 "
        >
          <div>
            <Input
              label="Recipe title:"
              inputType="text"
              ref={titleRef}
              labelClass="text-white mr-2"
              inputClass="w-fit rounded-md p-1"
            />
            <label className="text-white m-2">Recipe category:</label>
            <select ref={categoryRef} className="w-fit p-1 rounded-md">
              <option value="sweet">Sweet</option>
              <option value="snack">Snack</option>
              <option value="main">Main Dish</option>
            </select>
          </div>
          <label className="text-white mr-2">Recipe description:</label>
          <textarea
            className="whitespace-pre-line w-fit"
            ref={descRef}
          ></textarea>
          <div>
            <Input
              label="Proteins:"
              inputType="number"
              ref={proteinRef}
              min="0"
              inputClass="w-fit"
              labelClass="text-white mr-2"
            />
            <Input
              label="Fats:"
              inputType="number"
              ref={fatsRef}
              min="0"
              inputClass="w-fit"
              labelClass="text-white mx-2"
            />
            <Input
              label="Carbohydrates:"
              inputType="number"
              ref={carbRef}
              min="0"
              inputClass="w-fit"
              labelClass="text-white mx-2"
            />
          </div>
          <Input
            label="Calories:"
            inputType="number"
            ref={caloriesRef}
            min="0"
            inputClass="w-fit"
            labelClass="text-white mr-2"
          />
          <AddRecipeIngredients ref={ingredientsRef} />
          <button type="submit" onClick={handleSave}>
            Done
          </button>
        </form>
      </section>
    </>
    // Dodać kolejne inputy
  );
};

export default AddRecipe;
