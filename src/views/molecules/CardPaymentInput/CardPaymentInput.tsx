// import { useEffect, useState } from "react";
// import { SVGCreditCard } from "svg/CreditCard";
// import { cardPaymentHelper } from "./cardPaymentHelper";

// export const EXPIRYDATE = [/[0-9]/, /\d/, "/", /\d/, /\d/];
// export const CVC = [/[0-9]/, /\d/, /\d/, /\d/];

// function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

//     const [cardNumber, setCardNumber] = useState(cardNumberInputProps.value);
//     const [cardExpiry, setCardExpiry] = useState(cardExpiryInputProps.value);
//     const [cardCVC, setCardCVC] = useState(cardCVCInputProps.value);
    
//     const [cursorPosition, setCursorPosition] = useState(0);


//     // HELPERS
//     // =======================================================
//     function handleCardNumberFocus(e: any) {
//         let cursorPosition = e.target.selectionStart;
//         e.target.setSelectionRange(cursorPosition, cursorPosition);
//         setCursorPosition(cursorPosition);
//     }


//     // EVENT HANDLERS
//     // =======================================================
//     function maskInitial12Chars(value: string) {
//         let maskedValue = "";
//         for (let i = 0; i < value.length; i++) {
//             if (i < 12) {
//                 maskedValue += "*";
//             } else {
//                 maskedValue += value[i];
//             }
//         }
//         return maskedValue;
//     }
    
//     function handleCardNumberChange(e: any) {

        

//         console.log("cacacacc", e.target.selectionStart)
//         let inputValue = e.target.value;
//         let currentCursorPos = e.target.selectionStart;

    
//         inputValue = inputValue.replace(/\s/g,'');
//         if(inputValue.length > 16) {
//             inputValue = inputValue.substring(0, 16);
//         }
//         let formattedCardNumber = cardPaymentHelper.formatCardNumber(inputValue);
 
//         if(formattedCardNumber) {
//             setCardNumber(formattedCardNumber);
//             cardNumberInputProps.onChange(e);
//             setCursorPosition(currentCursorPos);
//         }
//     }

//     function handleExpiryChange(e:any) {
//         const { value } = e.target;
//         let exp = value;
        
//         if (value.length === 2) {
//             exp = value + '/';
//         }

//         setCardExpiry(exp);
//         cardExpiryInputProps.onChange(cardPaymentHelper.formatCardExpiry(value));
//     }

//     function handleCVC(e:any) {
//         // cardCVCInputProps.onChange(e)
//         setCardCVC(e)
//     }



//     // OTHER
//     // =======================================================
//     function onLoad() {
//         // TODO: If its loading, don't show the inputs as its security risk and just bad UX
//         setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
//         setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
//         setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
//     }
//     useEffect(() => {
//         let inputEl = document.getElementById(cardNumberInputProps.name) as HTMLInputElement;
//         inputEl.setSelectionRange(cursorPosition, cursorPosition);

//     }, [cursorPosition, cardNumberInputProps.name])

//     useEffect(() => {
//         if(cardNumberInputProps.value === "") return
    
//     }, [cardNumberInputProps.value]);

//     useEffect(() => {
//         onLoad()
//     }, [])

//     return (
//         <div>

//             <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
//                 <div className="flex-none w-[26px] h-[17px]">
//                     <SVGCreditCard />
//                 </div>
                
//                 <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
//                     <input 
//                         id={cardNumberInputProps.name} 
//                         name={cardNumberInputProps.name}
//                         autoComplete="cc-number" 
//                         className="absolute text-sm w-full py-1 px-1 hidden" 
//                         // pattern="[0-9]*" 
//                         placeholder="Card number" 
//                         value={cardNumber}
//                         onChange={(e) => handleCardNumberChange(e)}
//                         onFocus={(e) => handleCardNumberFocus(e)}
//                         type="text"
//                     />
//                     <input 
//                         id={cardNumberInputProps.name} 
//                         name={cardNumberInputProps.name}
//                         autoComplete="cc-number" 
//                         className="absolute text-sm w-full  py-1 px-1 " 
//                         // pattern="[0-9]*" 
//                         placeholder="Card number" 
//                         value={cardNumber}
//                         onChange={(e) => handleCardNumberChange(e)}
//                         onFocus={(e) => handleCardNumberFocus(e)}
//                         type="text"
//                     />
//                     {/* Create a second input where masked values will display */}
//                 </label>



//                 <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
//                     <input 
//                         maxLength={5}
//                         id={cardExpiryInputProps.id} 
//                         name={cardExpiryInputProps.name}
//                         autoComplete="cc-exp" 
//                         className="absolute text-sm w-full py-1 px-1 " 
//                         pattern="[0-9]*" 
//                         placeholder="MM/YY" 
//                         value={cardExpiry}
//                         onChange={(e) => handleExpiryChange(e)}
//                         type="text"
//                     />
//                 </label>

//                 <label className="relative ml-2 flex items-center  translate-x-[0rem] card-label" data-max="9999">
//                     <input 
//                         maxLength={3}
//                         id={cardCVCInputProps.name}
//                         name={cardCVCInputProps.name}
//                         autoComplete="off" 
//                         className="absolute text-sm w-full py-1 px-1 " 
//                         pattern="[0-9]*" 
//                         placeholder="CVC" 
//                         value={cardCVC}
//                         onChange={(e) => handleCVC(e)}
//                         type="text"
//                     />
//                 </label>
//             </div>

//             {/* <div className="bg-red-500">
//                 ERROR
//             </div> */}

//         </div>
//     )
// }

// export default CardPaymentInput;















import { useEffect, useState } from "react";
import { SVGCreditCard } from "svg/CreditCard";
import { cardPaymentHelper } from "./cardPaymentHelper";

export const EXPIRYDATE = [/[0-9]/, /\d/, "/", /\d/, /\d/];
export const CVC = [/[0-9]/, /\d/, /\d/, /\d/];

function CardPaymentInput({cardNumberInputProps, cardExpiryInputProps, cardCVCInputProps}:any) {

    const initialCardNumber = cardNumberInputProps.value;
    const initialExpiry = cardExpiryInputProps.value
    const initialCVC = cardCVCInputProps.value


    // const [rawCardNumber, setRawCardNumber] = useState("")
    // const [maskedCardNumber, setMaskedCardNumber] = useState("")

    const [cardNumber, setCardNumber] = useState({
        masked: "",
        raw: ""
    })

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
    // function onLoad() {
        // TODO: If its loading, don't show the inputs as its security risk and just bad UX
        // setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
        // setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
        // setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
    // }
    
    // useEffect(() => {
    //     let inputEl = document.getElementById(cardNumberInputProps.name) as HTMLInputElement;
    //     inputEl.setSelectionRange(cursorPosition, cursorPosition);

    // }, [cursorPosition, cardNumberInputProps.name])

    // useEffect(() => {
    //     if(cardNumberInputProps.value === "") return
    
    // }, [cardNumberInputProps.value]);


    function maskInput(input:string, from:number, to:number, spacing:number = 0, char:string = "*") {
        let masked = "";
        for (let i = 0; i < input.length; i++) {
            if (i >= from && i <= to) {
            if (spacing && (i - from) % (spacing + 1) === 0) {
                masked += " ";
            }
                masked += char;
            } else {
                masked += input[i];
            }
        }
        return masked;
    }
    
    

    function maskCardNumber(value:any) {
        return maskInput(value, 0, 11, 3)
    }

    function maskExpiryNumber() {

    }

    function maskCVCNumber() {
        
    }

     // EVENT HANDLERS
    // =======================================================

    function handleCardNumber(e: any) {
        // console.log("Handle card number", e.target.value);
      
        let raw = cardNumber.raw;
        let masked = e.target.value;
      
        for (let i = 0; i < masked.length; i++) {
          if (masked[i] !== cardNumber.masked[i]) {
            if (masked.length < cardNumber.masked.length) {
              raw = raw.slice(0, i) + raw.slice(i + 1);
            } else if (masked.length > cardNumber.masked.length) {
              raw = raw.slice(0, i) + masked[i] + raw.slice(i);
            }
          }
        }
      
        setCardNumber({ raw, masked });
      }
      
      

    //   useEffect(() => {
    //     // setMaskedCardNumber(maskCardNumber(inputValue));
    //     cardNumberInputProps.onChange({target: rawCardNumber});
    //     setMaskedCardNumber(maskCardNumber(rawCardNumber));
    //   }, [rawCardNumber])

    // function handleExpiry(e:any) {
    //     let inputValue = e.target.value;

    //     setRawExpiry(inputValue)
    //     setMaskedExpiry(inputValue)
    //     cardExpiryInputProps.onChange(e)
    // }

    // function handleCVC(e:any) {
    //     let inputValue = e.target.value;

    //     setRawCVC(inputValue)
    //     setMaskedCVC(inputValue)
    //     cardCVCInputProps.onChange(e)
    // }
        

    // OTHER
    // =======================================================
    function onLoad() {
        // TODO: If its loading, don't show the inputs as its security risk and just bad UX
        // setCardNumber(cardPaymentHelper.formatCardNumber(cardNumberInputProps.value));
        // setCardExpiry(cardPaymentHelper.formatCardExpiry(cardExpiryInputProps.value));
        // setCardCVC(cardPaymentHelper.formatCVC(cardCVCInputProps.value));
    }

    useEffect(() => {
        onLoad()
    }, [])


    const [rawValue, setRawValue] = useState("");
    const [maskedValue, setMaskedValue] = useState("");
  
    function handleChange(e:any) {
        console.log("Handle card number", e.target.value);


        const raw = e.target.value;
        setRawValue(raw);

        let masked = raw.slice(0, 12);
        masked = "*".repeat(masked.length).concat(raw.slice(12));

        let formattedMask = masked
        .slice(0, 16)
        .split("")
        .map((char:string, index:number) => {
        if (index % 4 === 3 && index !== 15) {
        return char + " ";
        } else {
        return char;
        }
        })
        .join("");

setMaskedValue(formattedMask);


        // const raw = e.target.value;
        // setRawValue(raw);
      
        // let masked = raw
        //   .slice(0, 16)
        //   .split("")
        //   .map((char: string, index: number) => {
        //     if (index % 4 === 3 && index !== 15) {
        //       return char + " ";
        //     } else {
        //       return char;
        //     }
        //   })
        //   .join("");
      
        // let formattedMask: any = masked;
      
        // setMaskedValue(formattedMask);



        console.log("RAW", rawValue)
        console.log("MASKED", maskedValue)
    }

    
    return (
        <div>
             <div className="absolute -top-10 bg-green-400 w-[300px]">
            <input type="text" placeholder="Hello" maxLength={16} onChange={handleChange} />
            <p className="w-full">Raw Value: {rawValue}</p>
            <p className="w-full">Masked Value: {maskedValue}</p>
            </div>
            <div>
                Raw: {cardNumber.raw} <br/>
                Masked: {cardNumber.masked}
            </div>

            <input 
                id={cardNumberInputProps.name} 
                name={cardNumberInputProps.name}
                autoComplete="cc-number"
                value={cardNumber.raw}
                onChange={(e) => cardNumberInputProps.onChange(e)}
                type="text"
                className="absolute hidden"
            /> 
            {/* <input 
                id={cardExpiryInputProps.name} 
                name={cardExpiryInputProps.name}
                autoComplete="cc-number"
                value={rawExpiry}
                onChange={(e) => handleExpiry(e)}
                type="text"
                className="absolute hidden"
            /> 
            <input 
                id={cardCVCInputProps.name} 
                name={cardCVCInputProps.name}
                autoComplete="cc-number"
                value={rawCVC}
                onChange={(e) => handleCVC(e)}
                type="text"
                className="absolue hidden"
            /> */}




            <div className="overflow-hidden rounded-[3px] py-2.5 px-2 border border-gray-300 relative flex items-center">
                <div className="flex-none w-[26px] h-[17px]">
                    <SVGCreditCard />
                </div>
                
                <label className="relative ml-2 flex items-center w-full card-label translate-x-[0px]">
                    <input 
                        autoComplete="cc-number" 
                        className="absolute text-sm w-full py-1 px-1" 
                        placeholder="Card number" 
                        value={cardNumber.masked}
                        onChange={(e) => handleCardNumber(e)}
                        // onFocus={(e) => handleCardNumberFocus(e)}
                        type="text"
                    />
                </label>


                {/* <label className="relative ml-2 flex items-center w-[105px] translate-x-[0rem] card-label" data-max="MM / YY 9">
                    <input 
                        maxLength={5}
                        id={cardExpiryInputProps.id} 
                        name={cardExpiryInputProps.name}
                        autoComplete="cc-exp" 
                        className="absolute text-sm w-full py-1 px-1" 
                        pattern="[0-9]*" 
                        placeholder="MM/YY" 
                        value={maskedExpiry}
                        onChange={(e) => handleExpiry(e)}
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
                        value={maskedCVC}
                        onChange={(e) => handleCVC(e)}
                        type="text"
                    />
                </label> */}
            </div>

            {/* <div className="bg-red-500">
                ERROR
            </div> */}

        </div>
    )
}

export default CardPaymentInput;