import React, { useEffect, useState } from 'react';

import useModal from "hooks/useModal";
import { capitalizeFirstLetter } from 'utils/common';
import useForm from "hooks/useForm";
import countryList from "config/countryList.json";

import Input from "views/atoms/Input/Input";
import Select from "views/atoms/Select/Select";

import ModalHeader from '../_components/ModalHeader';
import ModalFooter from '../_components/ModalFooter';
import ModalContent from '../_components/ModalContent/ModalContent';
import ModalRow from '../_components/ModalContent/ModalRow';
import ModalCard from '../_components/ModalCard';
import ModalForm from '../_components/ModalContent/ModalForm';

import ModalDeletePayment from './types/ModalDeletePayment';
import ModalUpdatePayment from './types/ModalUpdatePayment';

function ModalPayment({config}:ModalPaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    console.log("modaltype", option)

    // const userInfo = fields[0]
    // const form = useForm(null, {
    //     // card: {
    //         number: null,
    //         expiry: "0632",
    //         cvc: "000",
    //     // },
    //     address_one: userInfo.address_one,
    //     address_two: userInfo.address_two,
    //     country: "",
    //     state: userInfo.state,
    //     post_code: userInfo.post_code
    // })

    // console.log("Modal payment form", form.values.address_one)

    function submitForm(e:any) {
        e.preventDefault();
        // console.log("submit values", form.values)
    }

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        // submitForm()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    const modalOptions:any = {
        update: <ModalUpdatePayment config={config} />,
        delete: <ModalDeletePayment config={config} />
    }
    // console.log(modalOptions[option])

    return (
        <ModalCard>
            <ModalHeader title={`${capitalizeFirstLetter(option)} payment`} />
         
            <div>
            {/* <ModalForm onSubmitForm={(e:any) => submitForm(e)}> */}
                <ModalContent> 
                    {modalOptions[option]}
                </ModalContent>
                
            {/* </ModalForm> */}
            </div>
           
        </ModalCard>

    )
}

export default ModalPayment;

interface ModalPaymentProps {
    config: any;
}