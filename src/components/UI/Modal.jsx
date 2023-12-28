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
        <dialog ref={dialog} className='backdrop:bg-darkest-blue/90 p-10 rounded-md shadow-sm'> 
            {children}
            <form method='dialog'>
                <button className='bg-dark-blue text-slate-200 px-5 py-2 hover:shadow-xl hover:-translate-y-0.5 transition-all '>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});
 
export default Modal;