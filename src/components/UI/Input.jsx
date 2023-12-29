import React, {forwardRef} from 'react';

const Input = forwardRef(({inputType, label, labelClass, inputClass}, ref) => (
    <>
    <label className={labelClass}>{label}</label>
    <input type={inputType} ref={ref} className={inputClass}></input>
    </>
));
 
export default Input;
