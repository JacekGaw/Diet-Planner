import React, {forwardRef} from 'react';

const Input = forwardRef(({inputType, label, labelClass, inputClass, error, min, placeholder}, ref) => (
    <div className='flex flex-col'>
    <label className={labelClass}>{label}</label>
    <input type={inputType} ref={ref} className={inputClass} min={min} placeholder={placeholder}></input>
    {error && <p>{error}</p>}
    </div>
));
 
export default Input;
