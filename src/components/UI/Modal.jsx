import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {createPortal} from 'react-dom';

const Modal = forwardRef(function Modal({children}, ref){
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal( 
        <dialog ref={dialog} className='backdrop:bg-slate-800/80 p-10 rounded-md shadow-sm'> 
            {children}
            <form method='dialog'>
                <button className='bg-dark-green text-slate-200 px-5 py-2 rounded-md hover:shadow-xl transition-shadow duration-100 '>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});
 
export default Modal;