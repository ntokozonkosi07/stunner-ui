import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StepperComponent } from './stepper.component';
import { StepperService } from './stepper.service';

@NgModule({
    imports: [CommonModule],
    declarations: [StepperComponent],
    providers: [
        StepperService
    ],
    exports: [StepperComponent]
})
export class StepperModule {

}
export { StepperService } from './stepper.service';