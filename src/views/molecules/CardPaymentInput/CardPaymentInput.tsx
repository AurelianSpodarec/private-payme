import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";
import { cardPaymentHelper } from "./cardPaymentHelper";

export const EXPIRYDATE = [/[0-9]/, /\d/, "/", /\d/, /\d/];
export const CVC = [/[0-9]/, /\d/, /\d/, /\d/];

function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);
    const [cardExpiry, setCardExpiry] = useState(cardExpiryInputProps.value);
    const [cardCVC, setCardCVC] = useState(cardCVCInputProps.value);
    
    const [cursorPosition, setCursorPosition] = useState(0);


    // HELPERS
    // =======================================================
    function handleCardNumberFocus(e: any) {
        let cursorPosition = e.target.selectionStart;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
        setCursorPosition(cursorPosition);
    }


    // EVENT HANDLERS
    // =======================================================
    function maskInitial12Chars(value: string) {
        let maskedValue = "";
        for (let i = 0; i < value.length; i++) {
            if (i < 12) {
                maskedValue += "*";
            } else {
                maskedValue += value[i];
            }
        }
        return maskedValue;
    }
    
    function handleCardNumberChange(e: any) {
        console.log("cacacacc", e.target.selectionStart)
        let inputValue = e.target.value;
        let currentCursorPos = e.target.selectionStart;

    
        inputValue = inputValue.replace(/\s/g,'');
        if(inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
        }
        let formattedCardNumber = cardPaymentHelper.formatCardNumber(inputValue);
 
        if(formattedCardNumber) {
            setCardNumber(formattedCardNumber);
            cardNumberInputProps.onChange(e);
            setCursorPosition(currentCursorPos);
        }
    }

    function handleExpiryChange(e:any) {
        const { value } = e.target;
        let exp = value;
        
        if (value.length === 2) {
            exp = value + '/';
        }

        setCardExpiry(exp);
        cardExpiryInputProps.onChange(cardPaymentHelper.formatCardExpiry(value));
    }

    function handleCVC(e:any) {
        // cardCVCInputProps.onChange(e)
        setCardCVC(e)
    }



    // OTHER
    // =======================================================
    function onLoad() {
        // TODO: If its loading, don't show the inputs as its security risk and just bad UX
        setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
        setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
        setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
    }
    useEffect(() => {
        let inputEl = document.getElementById(cardNumberInputProps.name) as HTMLInputElement;
        inputEl.setSelectionRange(cursorPosition, cursorPosition);

    }, [cursorPosition, cardNumberInputProps.name])

    useEffect(() => {
        if(cardNumberInputProps.value === "") return
    
    }, [cardNumberInputProps.value]);

    useEffect(() => {
        onLoad()
    }, [])

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
                        value={cardExpiry}
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
                        value={cardCVC}
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