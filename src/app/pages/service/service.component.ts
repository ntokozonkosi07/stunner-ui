import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperService } from 'src/app/components/stepper/stepper.module';
import { PrincipleService } from 'src/app/services/principle-service.service';
import { PromptService } from 'src/app/services/prompt.service';
import { ServiceForm } from './forms/service-form/service-form.component';

@Component({
    styleUrls: ['./service.component.scss'],
    templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

    step: number;

    serviceForm: FormGroup;

    private _serviceFlyoutTemplate: TemplateRef<any>;

    @ViewChild("serviceFlyoutTemplate", {static: true})
    set serviceFlyoutTemplate(value: TemplateRef<any>){
        this._serviceFlyoutTemplate = value;
    }

    get serviceFlyoutTemplate(): TemplateRef<any>{
        return this._serviceFlyoutTemplate
    }

    services: PrincipleService[] = [];

    public steps = [
        {
            title: 'Service',
            active: false
        },
        {
            title: 'Products',
            active: false
        },
        {
            title: 'Confirmation',
            active: false
        }
    ]
    
    constructor(
        private _principleService: PrincipleService,
        private _promptService: PromptService,
        private _stepperService: StepperService,
        private _fb: FormBuilder,
        private _cdr: ChangeDetectorRef) { }
    
    ngOnInit(): void {
        this._principleService.getServices()
            .subscribe((services: PrincipleService[]) => this.services = services);
        
        this._promptService.showFlyout(this.serviceFlyoutTemplate, {form: this.serviceFlyoutTemplate});

        this._stepperService.navigation.subscribe(step => {
            debugger
            this.step = step;
        });

    }

}