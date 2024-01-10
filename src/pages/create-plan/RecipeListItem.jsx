import React from 'react';

const RecipeListItem = ({title, calories, children, onClick}) => {
    return ( 
        <>
            <li onClick={onClick} className='w-full bg-light-green my-2 p-2 hover:cursor-pointer hover:-translate-y-0.5 transition-translate duration-100'>
                <div>
                    <header>
                        <h4>{title}</h4>
                    </header>
                </div>
            </li>
        </>
    );
}
 
export default RecipeListItem;