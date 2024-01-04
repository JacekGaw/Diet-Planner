import React, {useContext} from 'react';
import { RecipesContext } from '../../store/recipes-context';

const RecipeCard = ({recipeInfo}) => {
    const {recipeDelete}= useContext(RecipesContext)
    return ( 
        <li className='p-2 border border-slate-200 rounded' >
            <header>
                <h4 className='text-xl text-center'>{recipeInfo.title}</h4>
            </header>
            <p className='text-slate-500 capitalize text-sm text-center'>{recipeInfo.category}</p>
            <div className='flex justify-center'>
                <p className='mx-1'>P: {recipeInfo.proteins}</p>
                <p className='mx-1'>F: {recipeInfo.fats}</p>
                <p className='mx-1'>C: {recipeInfo.carbohydrates}</p>
                <p className='mx-1'>Calories: {recipeInfo.calories}</p>
            </div>
            <p className='text-sm '>{recipeInfo.description}</p>
            {recipeInfo.ingredients.map((singleIngredient) => {
                return <p key={singleIngredient.id}>{singleIngredient.ingredient}: {singleIngredient.amount}{singleIngredient.unit}</p>
            })}
            <button onClick={() => recipeDelete(recipeInfo.id)} className='p-1 border border-slate-200 rounded'>Delete Recipe</button>
        </li>
    );
}
 
export default RecipeCard;