import useModal from "context/useModal";

import Button from "views/atoms/Button/Button";
import Input from "views/atoms/Input/Input";
import Select from "views/atoms/Select/Select";

import countryList from "config/countryList.json";
import { SVGPoweredByStripe } from "svg/PoweredByStripe";
import { SVGCreditCard } from "svg/CreditCard";

import React, { useState } from 'react';
 

function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState('');

  const handleChange = (e:any) => {
    const value = e.target.value;
    const formattedValue = value.replace(/\s?/g, '').replace(/(.{4})/g, '$1 ').trim();
    if (formattedValue.length <= 19) {
      setCardNumber(formattedValue);
    }
  };

  return (
    <div className="flex flex-row w-fullitems-center placeholder:text-[#D4D4D4] appearance-none rounded-[3px] border border-gray-300 px-1 py-2 placeholder-gray-800 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                    
        <div className="relative w-full flex items-center flex-shrink-0">

            <div className="relative">
                <input 
                    type="text" 
                    id="card-no"
                    name="card-no" 
                    className="w-full pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Card Number" 
                    value={cardNumber}
                    onChange={handleChange}
                    style={{
                    fontSize: '1rem',
                    color: 'transparent',
                    }}
                />
                <div className="absolute" style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    fontSize: '1rem',
                    color: '#000',
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}>
                    {cardNumber.replace(/[0-9]/g, '*')}
                </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-1">
                <div className="w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
            </div>
        
        </div>

        <div className="relative grow">
        {/* <div className="absolute right-0 "> */}
            <input type="text" name="credit-expiry" className="text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
            <input type="text" name="credit-cvc" className="flex-shrink-0 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
        {/* </div> */}
        </div>

    </div>
  );
}

// export default CreditCardInput;


// export default CreditCardInput;

function CardPaymentInput() {
    

    return (
        <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
            <div className="flex-none w-[26px] h-[17px]">
                <SVGCreditCard />
            </div>
            
            <label className="relative ml-2 w-full flex items-center card-label translate-x-0">
                <input 
                    id="card-number" 
                    autoComplete="cc-number" 
                    className="absolute text-sm w-full  py-1 px-1 " 
                    pattern="[0-9]*" 
                    placeholder="Card number" 
                    type="text"
                />
            </label>

            <label className="relative ml-2 flex items-center translate-x-[0rem] card-label" data-max="MM / YY 9">
                <input 
                    id="card-expiry" 
                    autoComplete="cc-exp" 
                    className="absolute text-sm w-full py-1 px-1 " 
                    pattern="[0-9]*" 
                    placeholder="MM/YY" 
                    type="text"
                />
            </label>

            <label className="relative ml-2 flex items-center  translate-x-[0rem] card-label" data-max="9999">
                <input 
                    id="cvc" 
                    autoComplete="off" 
                    className="absolute text-sm w-full py-1 px-1 " 
                    pattern="[0-9]*" 
                    placeholder="CVC" 
                    type="text"
                />
            </label>
        </div>
    )
}


function ModalUpdatePayment({config}:ModalUpdatePaymentProps) {
    const modalContext = useModal()

    const { id, type, title, description, onAction, option, fields } = config;


    // console.log("Modal payment", fields)

    function buildForm() {
        // TODO:
        // ORDER:
    }

    function handleAction(e:any) {
        e.preventDefault()
        onAction()
        modalContext.close()
    }

    function handleCancel(e:any) {
        e.preventDefault()
        modalContext.close()
    }

    {/* 
        TODO:
        - Country should not auto-populate so should be selected manually by the user
        - Card details should not auto-populate so should be entered manually by the user

        // Populate address, address2, state, postcode
    */}
    
    return (
        <div 
            className="w-[410px] my-auto mx-auto bg-white rounded-md" 
            style={{ "boxShadow": "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
        >
        <div className="p-8">


            <header className="mb-5">
                <h3 className="text-xl font-medium text-[#111111]">Update payment method</h3>
            </header>
 
            <form className="">
                    
                <div className="mb-6">
                    {/* <CreditCardInput /> */}

                    <CardPaymentInput />

 
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                        Address line 1
                    </label>
                    <Input  
                        id="address-line-1"
                        name="address-line-1"
                        type="text"
                        className="mt-1"
                        placeholder="e.g. 123 Fake St"
                        autoComplete="street-address"
                        required  
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                    Address line 2
                    </label>
                    <Input  
                        id="address-line-1"
                        name="address-line-1"
                        type="text"
                        className="mt-1"
                        placeholder="e.g. 123 Fake St"
                        autoComplete="street-address"
                        required  
                    />
                </div>

                <div className="mb-6">
                    {/* <input placeholder="Country"/> */}
                    <Select  data={countryList} onValueChange={(e:any) => console.log(e)}  />
                </div>

                <div className="mb-5 flex flex-row">

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
                            required
                        />

                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm leading-2 font-medium text-skin-primary">
                        Postcode
                        </label>
                        <Input  
                            id="postal-code"
                            name="postal-code"
                            className="mt-1"
                            type="text"
                            placeholder="e.g. W11 1NS"
                            autoComplete="street-address"
                            required
                        />
                    </div>

                </div>

            </form>

            <footer className="flex flex-col">
                <div className="flex flex-row items-center space-x-2 mb-5">
                    <Button variant="primary" kind="outline" block onClick={(e:any) => handleCancel(e)}>Cancel</Button>
                    <Button variant="primary" kind="solid" block onClick={(e:any) => handleAction(e)}>Update</Button>
                </div>
                <div className="w-full text-center">
                    <div className="h-4">
                    <SVGPoweredByStripe />
                    </div>
                </div>
            </footer>

        
        </div>    
        </div>
    )
}

export default ModalUpdatePayment;

interface ModalUpdatePaymentProps {
    config: any;
}