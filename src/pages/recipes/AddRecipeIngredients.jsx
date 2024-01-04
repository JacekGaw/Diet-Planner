import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

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
          return [...ingredients]
        },
      };
    }, [ingredients]);


  const handleAddIngredient = () => {
    const ingredient = ingredientRef.current.value;
    const amount =  amountRef.current.value;
    const unit= unitRef.current.value;

    ingredientRef.current.value = '';
    amountRef.current.value = '';

    setIngredients((prevState) => {
      return [
        ...prevState,
        {
          id: Math.random(),
          ingredient: ingredient,
          amount: amount,
          unit: unit,
        },
      ];
    });
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
