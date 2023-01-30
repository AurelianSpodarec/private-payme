export const cardPaymentHelper = {

    // OTHER
    maskInput(value:any, char:string) {
        return value.replace(/[0-9]/g, char);
    },




    // Formatting
    formatCardNumber(value:string) {
        // if(value === null ||  value === undefined) return;
        // return value.replace(/\D/g,'').replace(/(\d{4})/g, '$1 ').trim();

        let masked = "";
        let count = 0;
    
        for (let char of value) {
            masked += char;
            count++;
            if (count % 4 === 0 && count !== value.length) {
                masked += " ";
            }
        }
    
        return masked;
    },
    formatCardExpiry(value:string) {
        return value.replace(/[^0-9]/g, '')
        .replace(/(.{2})/, '$1/')
        .slice(0, 5);
    },

    formatCVC(value:string) {
        return this.maskInput(value, "*");
    },




    // VALIDATION
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