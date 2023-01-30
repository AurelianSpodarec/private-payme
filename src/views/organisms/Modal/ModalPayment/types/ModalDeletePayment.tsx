import React, { useEffect, useState } from 'react';

import useModal from "hooks/useModal";
import ModalHeader from '../../_components/ModalHeader';
import ModalFooter from '../../_components/ModalFooter';

import ModalContent from '../../_components/ModalContent/ModalContent';
import ModalCard from '../../_components/ModalCard';
import ModalForm from '../../_components/ModalContent/ModalForm';
import { capitalizeFirstLetter } from 'utils/common';



function ModalDeletePayment({config}:ModalDeletePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    const userInfo = fields[0]
   

    // function submitForm(e:any) {
    //     e.preventDefault();
    //     // console.log("submit values", form.values)
    // }

    // function handleAction(e:any) {
    //     e.preventDefault()
    //     // onAction()
    //     // submitForm()
    //     modalContext.close()
    // }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

   
    return (
        <>
            <span>
            You are about to delete payment details for user: 
            </span>
            <span className="font-semibold">
            {" "}{userInfo.first_name} {userInfo.last_name}
            </span>

            <ModalFooter actionTitle={`${capitalizeFirstLetter(option)}`} handleCancel={handleCancel} />
        </>
    )
}

export default ModalDeletePayment;



interface ModalDeletePaymentProps {
    config: any;
}