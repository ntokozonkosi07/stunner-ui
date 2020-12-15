import { Component, Injector, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from './../../../../components/stepper/stepper.module';
import { moneyFormatValidator } from './../../../../services/custom-validators/custom-validators.service';
import { FormGroupConfig } from '../../../../model/form-group.config';
import { StepperBase } from '../stepper-base.interface';

export interface Service {
    name: string;
    price: number;
}

@Component({
    selector: 'service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.scss']
})
export class ServiceForm implements StepperBase, OnInit {
    private _fb: FormBuilder;
    private _stepperService: StepperService

    serviceForm: FormGroup;

    constructor(private injector: Injector){
        this._fb = this.injector.get(FormBuilder);
        this._stepperService = this.injector.get(StepperService);
    }

    steps: any[];
    activeStep: number;

    ngOnInit(): void {}

    get f() { return this.serviceForm.controls; }

    createFormgroup() {
        const config: FormGroupConfig<Service> = {
            name: ['', [Validators.required]],
            price: [null, [Validators.required]]
        }
        
        this.serviceForm = this._fb.group(config);

        return this.serviceForm;
    }
    
    submit(){
        if (!this.serviceForm.valid) {
            Object.keys(this.serviceForm.controls).forEach(key => this.serviceForm.controls[key].markAsDirty());
            return;
        }

        this._stepperService.nextPage();
    }
}