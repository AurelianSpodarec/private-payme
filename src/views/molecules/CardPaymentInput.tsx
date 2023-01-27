import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";

function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);

   
    
    const luhnCheck = (val:any) => {
        let checksum = 0; // running checksum total
        let j = 1; // takes value of 1 or 2
    
        for (let i = val.length - 1; i >= 0; i--) {
        let calc = 0;
        calc = Number(val.charAt(i)) * j;
        if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
        }
        checksum = checksum + calc;
    
        if (j == 1) {
            j = 2;
        } else {
            j = 1;
        }
        }
    
        //Check if it is divisible by 10 or not.
        return (checksum % 10) == 0;
    }

    function formatCard(value:any) {
        console.log(value)
        if(value === null) return;
        return value.replace(/\D/g,'').replace(/(\d{4})/g, '$1 ').trim();
    }

    
    function handleCardNumberChange(e: any) {

        let formattedCardNumber = formatCard(e.target.value)
        
        setCardNumber(formattedCardNumber);
        cardNumberInputProps.onChange(formattedCardNumber);
    }


    useEffect(() => {
        if(cardNumberInputProps.value === "") return
        let formattedCardNumber = formatCard(cardNumberInputProps.value)

        // formattedCardNumber = formattedCardNumber.replace(/\D/g,'').replace(/(\d{4})/g, '$1 ').trim();
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
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    <input 
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={cardExpiryInputProps.value}
                        onChange={(e) => cardExpiryInputProps(e)}
                        type="text"
                    />
                </label>

                <label className="relative ml-2 flex items-center  translate-x-[0rem] card-label" data-max="9999">
                    <input 
                        id={cardCVCInputProps.name}
                        name={cardCVCInputProps.name}
                        autoComplete="off" 
                        className="absolute text-sm w-full py-1 px-1 " 
                        pattern="[0-9]*" 
                        placeholder="CVC" 
                        value={cardCVCInputProps.value}
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