import React, { useRef, useState, useContext } from "react";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";

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
        key: Math.random(),
        title: titleRef.current.value,
        category: categoryRef.current.value,
        description: descRef.current.value,
        proteins: proteinRef.current.value,
        fats: fatsRef.current.value,
        carbohydrates: carbRef.current.value,
        calories: caloriesRef.current.value,
      });
      visibility(false);
    }
  };

  return (
    <>
      <Modal ref={modal}>{modalInfo}</Modal>
      <section>
        <header>
          <h3 className="text-center">Add recipe to your recipe book:</h3>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mx-5 bg-slate-200 rounded-md p-5 flex flex-col justify-center items-center"
        >
          <div>
            <Input
              label="Recipe title:"
              inputType="text"
              ref={titleRef}
              labelClass=""
              inputClass="w-fit"
            />
            <label>Recipe category:</label>
            <select ref={categoryRef} className="w-fit">
              <option value="sweet">Sweet</option>
              <option value="snack">Snack</option>
              <option value="main">Main Dish</option>
            </select>
          </div>
          <label>Recipe description:</label>
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
            />
            <Input
              label="Fats:"
              inputType="number"
              ref={fatsRef}
              min="0"
              inputClass="w-fit"
            />
            <Input
              label="Carbohydrates:"
              inputType="number"
              ref={carbRef}
              min="0"
              inputClass="w-fit"
            />
          </div>
          <Input
            label="Calories:"
            inputType="number"
            ref={caloriesRef}
            min="0"
            inputClass="w-fit"
          />
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
