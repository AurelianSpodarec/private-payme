import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";
import { cardPaymentHelper } from "./cardPaymentHelper";


function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);
    const [cursorPosition, setCursorPosition] = useState(0);

    const [expiryNumber, setExpiryNumber] = useState(cardExpiryInputProps.value);
   
    const [expiry, setExpiry] = useState('');


    
    // HELPERS
    // =======================================================
    function handleCardNumberFocus(e: any) {
        // Get current cursor position
        let cursorPos = e.target.selectionStart;
        // Set cursor position
        e.target.setSelectionRange(cursorPos, cursorPos);
        // Update cursor position state
        setCursorPosition(cursorPos);
    }



    // EVENT HANDLERS
    // =======================================================

    function handleExpiryChange(e:any) {
        const { value } = e.target;
        let exp = value;
        
        if (value.length === 2) {
            exp = value + '/';
        }

        setExpiry(exp);
        cardExpiryInputProps.onChange(cardPaymentHelper.expirtyFormat(value));
    }

    function handleCardNumberChange(e: any) {
        let inputValue = e.target.value;
        let cursorPos = e.target.selectionStart;

        setCursorPosition(cursorPos);
        if (e.keyCode === 8) {
            inputValue = inputValue.slice(0, -1);
        }
        inputValue = inputValue.replace(/\s/g,'');
        if(inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
        }
        let formattedCardNumber = cardPaymentHelper.formatCard(inputValue);
        if(formattedCardNumber) {
            setCardNumber(formattedCardNumber);
            cardNumberInputProps.onChange(formattedCardNumber);
        }
    }



    // OTHER
    // =======================================================

    useEffect(() => {
        if(cardNumberInputProps.value === "") return

        let formattedCardNumber = cardPaymentHelper.formatCard(cardNumberInputProps.value)
        setCardNumber(formattedCardNumber);
    }, [cardNumberInputProps.value]);

    return (
        <div>

            <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                
                <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
                    <input 
                        id={cardNumberInputProps.name} 
                        name={cardNumberInputProps.name}
                        autoComplete="cc-number" 
                        className="absolute text-sm w-full  py-1 px-1 " 
                        // pattern="[0-9]*" 
                        placeholder="Card number" 
                        value={cardNumber}
                        onChange={(e) => handleCardNumberChange(e)}
                        onFocus={(e) => handleCardNumberFocus(e)}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    <input 
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={expiryNumber}
                        onChange={(e) => handleExpiryChange(e)}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center  translate-x-[0rem] card-label" data-max="9999">
                    <input 
                        maxLength={3}
                        id={cardCVCInputProps.name}
                        name={cardCVCInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="CVC" 
                        value={cardPaymentHelper.maskInput(cardCVCInputProps.value, '*')}
                        onChange={(e) => cardCVCInputProps.onChange(e)}
                        type="text"
                    />
                </label>
            </div>

            {/* {validateCardNumber(cardNumber) ? "valid card number" : "invalid card number"} */}
            {/* <div className="text-red-500">
                ERROR
            </div> */}

        </div>
    )
}

export default CardPaymentInput;