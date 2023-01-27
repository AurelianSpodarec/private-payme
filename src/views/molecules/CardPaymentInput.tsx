import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";

function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);

    // HELPERS
    function formatCardNumber(value:any) {
        value = value.replace(/\D/g, "");
        const maskInitial = cardNumberInputProps.maskInitial;
        if (value.length > maskInitial) {
            value = "*".repeat(maskInitial) + value.substring(maskInitial);
        }
        value = value.replace(/(\d{4})/g, "$1 ").trim();
        return value;
    }


    const validateCardNumber = (number:any) => {
        //Check if the number contains only numeric value  
        //and is of between 13 to 19 digits
        const regex = new RegExp("^[0-9]{13,19}$");
        if (!regex.test(number)){
            return false;
        }
      
        return luhnCheck(number);
    }
    
    const luhnCheck = (val:any) => {
        let checksum = 0; // running checksum total
        let j = 1; // takes value of 1 or 2
    
        // Process each digit one by one starting from the last
        for (let i = val.length - 1; i >= 0; i--) {
          let calc = 0;
          // Extract the next digit and multiply by 1 or 2 on alternative digits.
          calc = Number(val.charAt(i)) * j;
    
          // If the result is in two digits add 1 to the checksum total
          if (calc > 9) {
            checksum = checksum + 1;
            calc = calc - 10;
          }
    
          // Add the units element to the checksum total
          checksum = checksum + calc;
    
          // Switch the value of j
          if (j == 1) {
            j = 2;
          } else {
            j = 1;
          }
        }
      
        //Check if it is divisible by 10 or not.
        return (checksum % 10) == 0;
    }

    useEffect(() => {
        setCardNumber(formatCardNumber(cardNumberInputProps.value));
    }, [])
    
    return (
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
                    value={cardNumberInputProps.value}
                    onChange={(e) => cardNumberInputProps.onChange(e)}
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
                    onChange={(e) => cardExpiryInputProps.onChange(e)}
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
    )
}

export default CardPaymentInput;