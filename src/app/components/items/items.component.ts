import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'st-items',
    styleUrls: ['./items.component.scss'],
    templateUrl: 'items.component.html'
})
export class ItemsComponent implements OnInit{
    @Input("items")
    items: any[];

    ngOnInit(): void { }
}