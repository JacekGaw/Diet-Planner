import React from 'react';

const Button = ({onClick, className, children}) => {
    return ( 
        <button onClick={onClick} className={`bg-dark-green text-white rounded p-3 text-md mb-5 font-bold ${className}`}>
            {children}
        </button>
     );
}
 
export default Button;