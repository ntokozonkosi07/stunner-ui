import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorWrapper } from 'src/app/model/error-wrapper.model';
import { Login } from 'src/app/model/login.model';

import { AuthService } from './../../../services/auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    error: ErrorWrapper = {data: '', metadata: '', errors: []};

    get f() { return this.loginForm.controls; }

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login(login: Login) {
        this.error = null;

        if (!this.loginForm.valid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        this.authService.login(login)
            .subscribe(res => {
                debugger;
            }, 
            error => this.error = error.error)
    }

}
