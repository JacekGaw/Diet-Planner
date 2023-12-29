import React, {forwardRef} from 'react';

const Input = forwardRef(({inputType, label, labelClass, inputClass, error, min}, ref) => (
    <>
    <label className={labelClass}>{label}</label>
    <input type={inputType} ref={ref} className={inputClass} min={min}></input>
    {error && <p>{error}</p>}
    </>
));
 
export default Input;
