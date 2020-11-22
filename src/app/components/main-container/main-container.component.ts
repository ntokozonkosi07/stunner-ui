import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Flyout } from 'src/app/enum/flyout.enum';

import { PromptService } from 'src/app/services/prompt.service';

@Component({
    selector: 'st-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainer {
    flyoutToggleEnum = Flyout;
    flyoutToggle: Flyout = Flyout.CLOSED;
    flyoutTemplate: TemplateRef<any>;

    errorTemplate: TemplateRef<any>;

    @ViewChild('errorContentHost', { read: ViewContainerRef })
    errorContentHost: ViewContainerRef;

    constructor(private prompt: PromptService) {
        this.prompt.onShowFlyout.subscribe(({toggle, template}) => {
            this.flyoutToggle = toggle;
            this.flyoutTemplate = template;
        })
    }

    closeFlyout(){
        debugger;
        this.prompt.closeFlyout();
    }
} 