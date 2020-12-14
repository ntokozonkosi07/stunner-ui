import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StepperService } from 'src/app/components/stepper/stepper.module';

@Component({
  selector: 'flyout-service',
  templateUrl: './flyout-service.component.html',
  styleUrls: ['./flyout-service.component.scss']
})
export class FlyoutServiceComponent implements OnInit {

  step: number;

  public steps = [
    {
      title: 'Service',
      active: false
    },
    {
      title: 'Images',
      active: false
    },
    {
      title: 'Confirmation',
      active: false
    }
  ]

  serviceForm: FormGroup;

  @ViewChild('serviceTemplate', { static: true })
  serviceTemplate: TemplateRef<any>;

  @ViewChild('productTemplate', { static: true })
  productTemplate: TemplateRef<any>;

  @ViewChild('confirmationTemplate', { static: true })
  confirmationTemplate: TemplateRef<any>;

  @ViewChild('stepperContainer', { read: ViewContainerRef, static: true })
  stepperContainer: ViewContainerRef

  constructor(private _stepperService: StepperService) { }

  ngOnInit(): void {
    this._stepperService.navigation.subscribe(step => {
      this.step = step;
    });

    this._stepperService.navigation.subscribe(step => {
      this.stepperContainer.clear();
      switch(step){
        case 0:
          this.stepperContainer.createEmbeddedView(this.serviceTemplate);
          break;
        case 1:
          this.stepperContainer.createEmbeddedView(this.productTemplate);
          // this._stepperService.nextPage();
          break;
        case 2:
          this.stepperContainer.createEmbeddedView(this.confirmationTemplate);
      }
    })
  }



}
