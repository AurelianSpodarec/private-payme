import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";
import { cardPaymentHelper } from "./cardPaymentHelper";

export const EXPIRYDATE = [/[0-9]/, /\d/, "/", /\d/, /\d/];
export const CVC = [/[0-9]/, /\d/, /\d/, /\d/];

function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const initialCardNumber = cardNumberInputProps.value;
    const initialExpiry = cardExpiryInputProps.value
    const initialCVC = cardCVCInputProps.value


    const [rawCardNumber, setRawCardNumber] = useState(initialCardNumber)
    const [maskedCardNumber, setMaskedCardNumber] = useState(initialCardNumber)

    const [rawExpiry, setRawExpiry] = useState(initialExpiry)
    const [maskedExpiry, setMaskedExpiry] = useState(initialExpiry)

    const [rawCVC, setRawCVC] = useState(initialCVC)
    const [maskedCVC, setMaskedCVC] = useState(initialCVC)




    // const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);
    // const [cardExpiry, setCardExpiry] = useState(cardExpiryInputProps.value);
    // const [cardCVC, setCardCVC] = useState(cardCVCInputProps.value);
    
    const [cursorPosition, setCursorPosition] = useState(0);


    // HELPERS
    // =======================================================
    // function handleCardNumberFocus(e: any) {
    //     let cursorPosition = e.target.selectionStart;
    //     e.target.setSelectionRange(cursorPosition, cursorPosition);
    //     setCursorPosition(cursorPosition);
    // }


    // EVENT HANDLERS
    // =======================================================
   

    // function maskInitial12Chars(value: string) {
    //     let maskedValue = "";
    //     for (let i = 0; i < value.length; i++) {
    //         if (i < 12) {
    //             maskedValue += "*";
    //         } else {
    //             maskedValue += value[i];
    //         }
    //     }
    //     return maskedValue;
    // }

    // function maskString(str:any, from:any, to:any, maskingChar:any = '*') {
    //     let maskedString = '';
    //     for (let i = 0; i < str.length; i++) {
    //       if (i >= from && i <= to && str[i] !== ' ') {
    //         maskedString += maskingChar;
    //       } else {
    //         maskedString += str[i];
    //       }
    //     }
    //     return maskedString;
    // }
    
    // function handleMasketCardNumberFocus(e:any) {

    // }

    // function handleMaskedCardNumberChange(e:any) {

    // }

    
    // function handleCardNumberChange(e: any) {

    //     // IF masked, do XYZ else do ZYX

    //     console.log("cacacacc", e.target.selectionStart)
    //     let inputValue = e.target.value;
    //     let currentCursorPos = e.target.selectionStart;

    
    //     inputValue = inputValue.replace(/\s/g,'');
    //     if(inputValue.length > 16) {
    //         inputValue = inputValue.substring(0, 16);
    //     }
    //     let formattedCardNumber = cardPaymentHelper.formatCardNumber(inputValue);
 
    //     if(formattedCardNumber) {
    //         setCardNumber(formattedCardNumber);
    //         cardNumberInputProps.onChange(e);
    //         setCursorPosition(currentCursorPos);
    //     }
    // }

    // function handleExpiryChange(e:any) {
    //     const { value } = e.target;
    //     let exp = value;
        
    //     if (value.length === 2) {
    //         exp = value + '/';
    //     }

    //     setCardExpiry(exp);
    //     cardExpiryInputProps.onChange(cardPaymentHelper.formatCardExpiry(value));
    // }

    // function handleCVC(e:any) {
    //     // cardCVCInputProps.onChange(e)
    //     setCardCVC(e)
    // }



    // OTHER
    // =======================================================
    function onLoad() {
        // TODO: If its loading, don't show the inputs as its security risk and just bad UX
        // setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
        // setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
        // setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
    }
    
    // useEffect(() => {
    //     let inputEl = document.getElementById(cardNumberInputProps.name) as HTMLInputElement;
    //     inputEl.setSelectionRange(cursorPosition, cursorPosition);

    // }, [cursorPosition, cardNumberInputProps.name])

    // useEffect(() => {
    //     if(cardNumberInputProps.value === "") return
    
    // }, [cardNumberInputProps.value]);



     // EVENT HANDLERS
    // =======================================================

    function handleCardNumber(e:any) {
        let inputValue = e.target.value;

        setRawCardNumber(inputValue)
        setMaskedCardNumber(inputValue)
        cardNumberInputProps.onChange(e)
    }

    function handleExpiry(e:any) {
        let inputValue = e.target.value;

        setRawExpiry(inputValue)
        setMaskedExpiry(inputValue)
        cardExpiryInputProps.onChange(e)
    }

    function handleCVC(e:any) {
        let inputValue = e.target.value;

        setRawCVC(inputValue)
        setMaskedCVC(inputValue)
        cardCVCInputProps.onChange(e)
    }
        
    useEffect(() => {
        onLoad()
    }, [])

    return (
        <div>


                    <input 
                        id={cardNumberInputProps.name} 
                        name={cardNumberInputProps.name}
                        autoComplete="cc-number"
                        value={rawCardNumber}
                        onChange={(e) => handleCardNumber(e)}
                        type="text"
                        className="absolute hiddlen"
                    /> 



            <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                
                <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
    
                    <input 
                        // id={cardNumberInputProps.name} 
                        // name={cardNumberInputProps.name}
                        autoComplete="cc-number" 
                        className="absolute text-sm w-full py-1 px-1 hidden" 
                        // pattern="[0-9]*" 
                        placeholder="Card number" 
                        value={maskedCardNumber}
                        onChange={(e) => handleCardNumber(e)}
                        // onFocus={(e) => handleCardNumberFocus(e)}
                        type="text"
                    />
            
                </label>


                <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    {/* <input 
                        id={cardExpiryInputProps.name} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-number"
                        value={rawExpiry}
                        onChange={(e) => handleExpiry(e)}
                        type="text"
                        className="hidden"
                    /> */}
                 <input 
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={maskedExpiry}
                        onChange={(e) => handleExpiry(e)}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center  translate-x-[0rem] card-label" data-max="9999">
                    {/* <input 
                        id={cardCVCInputProps.name} 
                        name={cardCVCInputProps.name}
                        autoComplete="cc-number"
                        value={rawCVC}
                        onChange={(e) => handleCVC(e)}
                        type="text"
                        className="hidden"
                    /> */}
                    <input 
                        maxLength={3}
                        id={cardCVCInputProps.name}
                        name={cardCVCInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="CVC" 
                        value={maskedCVC}
                        onChange={(e) => handleCVC(e)}
                        type="text"
                    />
                </label>
            </div>

            {/* <div className="bg-red-500">
                ERROR
            </div> */}

        </div>
    )
}

export default CardPaymentInput;