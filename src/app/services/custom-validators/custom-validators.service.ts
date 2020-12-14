import { AbstractControl } from '@angular/forms';

export function moneyFormatValidator(control: AbstractControl) {
    
    const regEx = new RegExp(/(\d+)((\,|\.){1,1}(\d+))?/);
    const isValid = regEx.test(control.value);

    return  { 'money': !isValid };
}
