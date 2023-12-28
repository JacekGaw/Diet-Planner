import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return ( 
        <menu className='w-full border-solid border-b border-slate-700'>
            <ul className='flex p-5 justify-center items-end'>
                <NavLink to="/"><h2 className='text-2xl hover:drop-shadow-md'>Diet Planner</h2></NavLink>
                <NavLink to="/recipes" className='px-5 text-xl hover:drop-shadow-md'>Recipes</NavLink>
            </ul>
        </menu>
    );
}
 
export default Menu;