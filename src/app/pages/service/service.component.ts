import { Component, OnInit } from "@angular/core";
import { PrincipleService } from 'src/app/services/principle-service.service';

@Component({
    styleUrls: ['./service.component.scss'],
    templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

    services: PrincipleService[] = [];
    
    constructor(private _principleService: PrincipleService) { }
    
    ngOnInit(): void {
        this._principleService.getServices()
            .subscribe((services: PrincipleService[]) => this.services = services);
    }

}