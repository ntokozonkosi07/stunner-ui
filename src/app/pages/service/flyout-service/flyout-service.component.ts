import { Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StepperService } from 'src/app/components/stepper/stepper.module';
import { ServiceForm } from '../forms/service-form/service-form.component';
import { StepperBase } from '../forms/stepper-base.interface';
import { UploadsFormComponent } from '../forms/uploads-form/uploads-form.component';

export class StepItem {
  constructor(public component: Type<any>, public data: any){}
}

@Component({
  selector: 'flyout-service',
  templateUrl: './flyout-service.component.html',
  styleUrls: ['./flyout-service.component.scss']
})
export class FlyoutServiceComponent implements OnInit {

  step: number;

  public steps: StepItem[] = [
    new StepItem(ServiceForm, {title: 'Service'}),
    new StepItem(UploadsFormComponent, {title: 'Upload'}),
    new StepItem(ServiceForm, {title: 'Confirmation'})
  ]

  serviceForm: FormGroup;

  @ViewChild('stepperContainer', { read: ViewContainerRef, static: true })
  stepperContainer: ViewContainerRef

  constructor(
    private _stepperService: StepperService,
    private _fb: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this._stepperService.navigation.subscribe(step => {
      this.step = step;
    });

    this.serviceForm = this._fb.group({});

    this._stepperService.navigation.subscribe(step => {
      
      this.stepperContainer.clear();
      
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.steps[step].component);
      const componentRef = this.stepperContainer.createComponent<StepperBase>(componentFactory);

      switch (step) {
        case 0:
          this.serviceForm.registerControl("details", componentRef.instance.createFormgroup());
          break;
        case 1:
          this.serviceForm.registerControl("uploads", componentRef.instance.createFormgroup());
          break;
        case 2:
          this.serviceForm.registerControl("details", componentRef.instance.createFormgroup());
      }
    })
  }
}