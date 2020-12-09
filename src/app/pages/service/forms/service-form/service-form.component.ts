import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    constructor(private _fb: FormBuilder){}

    ngOnInit(): void {
        this.createForm()
    }

    get f() { return this.serviceForm.controls; }

    createForm(){
        const config: FormGroupConfig<Service> = {
            name: ['', [Validators.required]]
        }
        this.serviceForm = this._fb.group(config);

        return this.serviceForm;
    }
    
    submit(){
        debugger;
        if (!this.serviceForm.valid) {
            Object.keys(this.serviceForm.controls).forEach(key => this.serviceForm.controls[key].markAsDirty());
            return;
        }
    }
}