import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'st-new-item',
    template: `
            <div class="NewItemComponent" (click)="addItem()">
                <i class="fas fa-plus"></i>
            </div>`,
    styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {
    @Output()
    addNewItem: EventEmitter<any>;
    
    constructor(){
        this.addNewItem = new EventEmitter();
    }

    ngOnInit(): void {
        
    }

    addItem(){
        this.addNewItem.emit();
    }

}