import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import Button from "../../components/UI/Button";

const AddRecipeIngredients = forwardRef((props, ref) => {
  const [ingredients, setIngredients] = useState([]);
  const ingredientRef = useRef();
  const amountRef = useRef();
  const unitRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        getIngredients() {
          return [...ingredients];
        },
      };
    },
    [ingredients]
  );

  const handleAddIngredient = () => {
    const ingredient = ingredientRef.current.value;
    const amount = amountRef.current.value;
    const unit = unitRef.current.value;

    if (ingredient.trim() !== "" && amount !== "" && unit !== "") {
      setIngredients((prevState) => {
        return [
          ...prevState,
          {
            id: Math.random(),
            ingredient: ingredient,
            amount: parseInt(amount),
            unit: unit,
          },
        ];
      });
    }
    ingredientRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <>
      <h3 className="text-center mt-5 text-md">
        Ingredients ({ingredients.length}):
      </h3>
      <div className="w-full flex gap-4 justify-between mb-2">
        <div className="flex flex-col">
          <label className="text-sm">Ingredient:</label>
          <input
            type="text"
            ref={ingredientRef}
            className="border-b-2 border-dark-green p-1 max-w-[100px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Amount:</label>
          <input
            type="number"
            min="0"
            ref={amountRef}
            className="border-b-2 border-dark-green p-1 max-w-[100px]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm">Unit:</label>
          <select
            ref={unitRef}
            className="border-b-2 border-dark-green p-1 max-w-[100px]"
          >
            <option value="g">g</option>
            <option value="ml">ml</option>
          </select>
        </div>
      </div>
      <Button
        onClick={handleAddIngredient}
        className={`bg-slate-100 text-black border-2 border-slate-800 text-sm py-2`}
      >
        Save Ingredient
      </Button>
    </>
  );
});

export default AddRecipeIngredients;
