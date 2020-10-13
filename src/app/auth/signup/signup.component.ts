import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(private router: Router) {}
    
    ngOnInit(): void {}
    
    backToLogin(event){
        this.router.navigateByUrl('auth/login');
    }
}