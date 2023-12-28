import React, {useRef, useState} from 'react';
import Modal from '../../components/UI/Modal';
import AddRecipe from './AddRecipe';

const Recipes = () => {
    const [addRecipeView, setAddRecipeView] = useState(false);
    const modal = useRef();
    const handleChangeVisibility =() => {
        setAddRecipeView((prevState) => {
            return !prevState;
        });
        console.log(addRecipeView);
        // modal.current.open();
    }

    return ( 
        <>
        <Modal ref={modal}>
            <p>blad chyba</p>
        </Modal>
        <p>Here are some recipesvdv</p>
        <button onClick={handleChangeVisibility}>{addRecipeView ? "Close" : "Add recipe"}</button>
        {addRecipeView === true ? <AddRecipe /> : ''}
        </>
    );
}
 
export default Recipes;