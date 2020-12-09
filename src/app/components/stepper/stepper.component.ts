
import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { StepperService } from './stepper.service';

@Component({
    selector: 'stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['stepper.component.scss']
})
export class StepperComponent implements OnInit {

    @Input() steps: any[];

    activeStep: number;

    constructor(private _stepperService: StepperService) { }

    ngOnInit(): void {
        this._stepperService.navigation
            .subscribe(step => {
                if ((step >= 0) && (step <= this.steps.length)) {
                    this.steps.forEach(x => x.active = false);
                    this.steps[step].active = true;
                } 
            })
    }
}