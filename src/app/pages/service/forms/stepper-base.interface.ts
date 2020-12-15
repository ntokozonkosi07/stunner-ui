import { FormGroup } from '@angular/forms';

export interface StepperBase {
    createFormgroup(): FormGroup;
}