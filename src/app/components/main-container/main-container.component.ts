import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
    selector: 'st-main-container',
    templateUrl: './main-container.component.html',
    styleUrls: ['./main-container.component.scss']
})
export class MainContainer {

    errorTemplate: TemplateRef<any>;

    @ViewChild('errorContentHost', { read: ViewContainerRef })
    errorContentHost: ViewContainerRef;

    constructor(private prompt: PromptService) { }

    

} 