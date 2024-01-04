import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return ( 
        <menu className='w-full border-solid border-b border-slate-700'>
            <ul className='flex p-5 justify-start items-end'>
                <NavLink to="/"><h2 className='px-5 text-2xl hover:drop-shadow-md'>Diet Planner</h2></NavLink>
                <NavLink to="/recipes" className='px-5 text-lg hover:drop-shadow-md'>Recipes</NavLink>
                <NavLink to="/meal-plan" className='px-5 text-lg hover:drop-shadow-md'>Meal Plan</NavLink>
            </ul>
        </menu>
    );
}
 
export default Menu;