import { Component, Input, OnInit } from "@angular/core";

import { PromptService } from 'src/app/services/prompt.service';

@Component({
    selector: 'st-items',
    styleUrls: ['./items.component.scss'],
    templateUrl: 'items.component.html'
})
export class ItemsComponent implements OnInit{
    @Input("items")
    items: any[];

    constructor(private promptService: PromptService){}

    ngOnInit(): void { }

    addNewItem(){
        this.promptService.showFlyout();
    }
}