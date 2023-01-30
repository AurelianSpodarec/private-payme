import React, { useEffect, useState } from 'react';

import useModal from "hooks/useModal";
import useForm from "hooks/useForm";
import countryList from "config/countryList.json";

import Input from "views/atoms/Input/Input";
import Select from "views/atoms/Select/Select";

import CardPaymentInput from "views/molecules/CardPaymentInput/CardPaymentInput";
import ModalRow from '../../_components/ModalContent/ModalRow';
import ModalFooter from '../../_components/ModalFooter';
import { capitalizeFirstLetter } from 'utils/common';


function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const { id, type, title, description, onAction, option, fields } = config;
    
    const modalContext = useModal()

    const userInfo = fields[0]
    const form = useForm(null, {
        // card: {
            number: "",
            expiry: "",
            cvc: "",
        // },
        address_one: userInfo.address_one,
        address_two: userInfo.address_two,
        country: "",
        state: userInfo.state,
        post_code: userInfo.post_code
    })

    console.log("Modal payment form", form)

    function submitForm(e:any) {
        e.preventDefault();
        console.log("submit val3333333333333ues", form.values)
    }

    function handleAction(e:any) {
        e.preventDefault()
        // onAction()
        // submitForm()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }


    function handleSelectChange(e:any) {
        form.handleChange( {target: { "name": "country", "value": e}});
    }
   
    return (
         <form onSubmit={(e) => submitForm(e)}>

            <ModalRow>
                <CardPaymentInput 
                    cardNumberInputProps={{ 
                        value: form.values.number,
                        name: "number",
                        onChange:(e:any) => console.log("OUTSIDE card", e.target),//form.handleChange(e),
                        maskInitial: 12,
                    }}
                    cardExpiryInputProps={{ 
                        value: form.values.expiry,
                        name: "expiry",
                        onChange: (e:any) => form.handleChange(e)
                    }}
                    cardCVCInputProps={{ 
                        value: form.values.cvc,
                        name: "cvc",
                        onChange: (e:any) => form.handleChange(e),
                        maskInitial: 3
                    }}
                />
            </ModalRow>

            <ModalRow>
                <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                    Address line 1
                </label>
                <Input  
                    id="address_one"
                    name="address_one"
                    type="text"
                    className="mt-1"
                    placeholder="e.g. 123 Fake St"
                    autoComplete="street-address"
                    value={form.values.address_one}
                    onChange={(e:any) => form.handleChange(e)}
                    required  
                />
            </ModalRow>

            <ModalRow>
                <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                Address line 2
                </label>
                <Input  
                    id="address_two"
                    name="address_two"
                    type="text"
                    className="mt-1"
                    placeholder="e.g. 123 Fake St"
                    autoComplete="street-address"
                    value={form.values.address_two}
                    onChange={(e:any) => form.handleChange(e)}
                    required  
                />
            </ModalRow>

            <ModalRow>
                <Select 
                    id="country"
                    name="country"
                    placeholder="Select country"
                    data={countryList} 
                    onChange={(e:any) => handleSelectChange(e)}
                    // onValueChange={(e:any) =>  console.log("selectchange", e)} //form.handleChange(e)}
                />
            </ModalRow>


            <div className="mb-5">
            <div className="flex flex-row">

                <div>
                    <label htmlFor="state" className="block text-sm leading-2 font-medium text-skin-primary">
                    State <span className="text-[#D4D4D4]">(optional)</span>
                    </label>
                    <Input  
                        id="state"
                        name="state"
                        className="mt-1"
                        type="text"
                        placeholder="e.g. Middlesex"
                        autoComplete="street-address"
                        value={form.values.state}
                        onChange={(e:any) => form.handleChange(e)}
                        required
                    />

                </div>

                <div>
                    <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                    Postcode
                    </label>
                    <Input  
                        id="post_code"
                        name="post_code"
                        className="mt-1"
                        type="text"
                        placeholder="e.g. W11 1NS"
                        autoComplete="street-address"
                        value={form.values.post_code}
                        onChange={(e:any) => form.handleChange(e)}
                        required
                    />
                </div>

            </div>
            </div>

            <ModalFooter actionTitle={`${capitalizeFirstLetter(option)}`} handleCancel={handleCancel} />
        </form>
    )
}

export default ModalUpdatePayment;



interface ModalUpdatePaymentProps {
    config: any;
}