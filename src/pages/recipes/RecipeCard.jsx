import React, {useContext} from 'react';
import { RecipesContext } from '../../store/recipes-context';

const RecipeCard = ({recipeInfo, className}) => {
    const {recipeDelete}= useContext(RecipesContext)
    return ( 
        <li className={className} >
            <header className='bg-dark-green rounded-t-lg p-3 text-white'>
                <h4 className='text-xl text-center'>{recipeInfo.title}</h4>
                <p className='text-light-green capitalize text-sm text-center'>{recipeInfo.category}</p>
            </header>
            
            <div className='flex justify-center p-2 mb-2 text-sm font-semibold bg-light-green'>
                <p className='mx-1'>P: {recipeInfo.proteins}</p>
                <p className='mx-1'>F: {recipeInfo.fats}</p>
                <p className='mx-1'>C: {recipeInfo.carbohydrates}</p>
                <p className='mx-1'>Calories: {recipeInfo.calories}</p>
            </div>
            <p className='text-sm  px-3 text-justify'><strong>Description: </strong>{recipeInfo.description}</p>
            <p className='p-3'><strong>Ingredients: </strong>{recipeInfo.ingredients.length}</p>
            <button onClick={() => recipeDelete(recipeInfo.id)} className='p-2 font-light text-sm bg-dark-green rounded text-white mb-3 ml-3'>Delete Recipe</button>
        </li>
    );
}
 
export default RecipeCard;