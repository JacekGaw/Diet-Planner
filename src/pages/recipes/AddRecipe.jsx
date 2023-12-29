import React, { useRef, useState, useContext } from "react";
import Input from "../../components/UI/Input";
import Modal from "../../components/UI/Modal";
import { RecipesContext } from "../../store/recipes-context";

const AddRecipe = () => {
  const {recipeAdd} = useContext(RecipesContext);
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
        title: titleRef.current.value,
        category: categoryRef.current.value,
        description: descRef.current.value,
        proteins: proteinRef.current.value,
        fats: fatsRef.current.value,
        carbohydrates: carbRef.current.value,
        calories: caloriesRef.current.value,
      });
    }
  };

  return (
    <>
      <Modal ref={modal}>{modalInfo}</Modal>
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
        <Input label="Proteins:" inputType="number" ref={proteinRef} min="0" />
        <Input label="Fats:" inputType="number" ref={fatsRef} min="0" />
        <Input
          label="Carbohydrates:"
          inputType="number"
          ref={carbRef}
          min="0"
        />
        <Input label="Calories:" inputType="number" ref={caloriesRef} min="0" />

        <button type="submit" onClick={handleSave}>
          Done
        </button>
      </form>
    </>
    // Dodać kolejne inputy
  );
};

export default AddRecipe;
