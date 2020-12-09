import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Flyout } from 'src/app/enum/flyout.enum';

import { PromptService } from 'src/app/services/prompt.service';

@Component({
    selector: 'st-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainer {
    flyoutToggleEnum = Flyout;
    flyoutToggle: Flyout = Flyout.OPEN;

    @Input()
    public flyoutTemplate: TemplateRef<any>;

    errorTemplate: TemplateRef<any>;

    @ViewChild('errorContentHost', { read: ViewContainerRef })
    errorContentHost: ViewContainerRef;

    @ViewChild('flyoutHost', { read: ViewContainerRef, static: true })
    flyoutHost: ViewContainerRef

    constructor(private prompt: PromptService) {
        this.prompt.onShowFlyout.subscribe(({toggle, template, context}) => {
            this.flyoutToggle = toggle;
            this.flyoutTemplate = this.flyoutTemplate || template;

            this.flyoutHost.createEmbeddedView(this.flyoutTemplate,context);
        })
    }

    closeFlyout(){
        this.prompt.closeFlyout();
    }
} 