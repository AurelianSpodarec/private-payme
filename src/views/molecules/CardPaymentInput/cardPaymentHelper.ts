export const cardPaymentHelper = {
    formatCard(value:string) {
       if(value === null) return;
       // if(value.length === 19) return ;
       return value.replace(/\D/g,'').replace(/(\d{4})/g, '$1 ').trim();
   },
    maskInput(value:any, char:string) {
       return value.replace(/[0-9]/g, char);
   },
    expirtyFormat(value:string) {
       return value.replace(/[^0-9]/g, '')
       .replace(/(.{2})/, '$1/')
       .slice(0, 5);
       // setExpiryNumber(formattedInput);
   },
   luhnCheck(val:any) {
       let checksum = 0;
       let j = 1;
   
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
       return (checksum % 10) == 0;
   }

}