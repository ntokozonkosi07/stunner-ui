import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from 'src/app/components/stepper/stepper.module';
import { FormGroupConfig } from '../../../../model/form-group.config';

export interface Service {
    name: string;
}

@Component({
    selector: 'service-form',
    templateUrl: './service-form.component.html',
    styleUrls: ['./service-form.component.scss']
})
export class ServiceForm implements OnInit {
    serviceForm: FormGroup;

    constructor(private _fb: FormBuilder, private _stepperService: StepperService){}

    ngOnInit(): void {this.createForm()}

    get f() { return this.serviceForm.controls; }

    createForm(){
        const config: FormGroupConfig<Service> = {
            name: ['', [Validators.required]]
        }
        debugger;
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