import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'accountType'
})
export class AccountTypePipe implements PipeTransform{

    transform(value: number) {
        if(value==0) return "Saving Account";
        else if (value ==1) return "Fixed Account";
        else if (value == 2) return "Loan Account";
        else return "Unknown";
    }

}