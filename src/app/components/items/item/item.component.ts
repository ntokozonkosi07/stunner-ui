import { Component, Input } from "@angular/core";

@Component({
    selector: 'st-item',
    styleUrls: ['item.component.scss'],
    templateUrl: 'item.component.html'
})
export class ItemComponent {
    @Input("item")
    item: any;

    
}