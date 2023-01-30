import { useState } from 'react';
import * as ReactDOM from 'react-dom';

import useModal from 'hooks/useModal';


import ModalPayment from './ModalPayment/ModalPayment';


const doc = document.getElementById('root');

function CreateModal() {
    const modalContext = useModal()
    const modalData = modalContext.data;

    const modalOptions:any = {
        payment: <ModalPayment config={modalData} />,
        // configm: <ModalConfirm config={modalData} />
    }

    if(!modalContext.isOpen || !doc) return <></>
    return ReactDOM.createPortal(
        <aside 
            role="dialog" 
            className={`
                fixed top-0 right-0 bottom-0 left-0 z-50 
                m-auto opacity-0 bg-black/50
                ${modalContext.isOpen ? 'visible animate-open' : 'hidden'} 
            `}
        >
            <div className="flex m-auto relative h-full w-full items-center">
                {modalOptions[modalData.type]}
            </div>
        </aside>
    , doc)
}

export default CreateModal;

    // transform: scale(0.8);
    // opacity: 0;
    // transition: 200ms ease-in-out;
