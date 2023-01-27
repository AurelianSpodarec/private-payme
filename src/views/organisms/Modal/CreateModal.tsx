import useModal from 'context/useModal';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import ModalUpdatePayment from './ModalUpdatePayment/ModalUpdatePayment';

const doc = document.getElementById('root');

function CreateModal() {
    const modalContext = useModal()
    const modalData = modalContext.data;

    const modalOptions:any = {
        updatePayment: <ModalUpdatePayment config={modalData} />,
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