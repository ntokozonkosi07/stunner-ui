import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorWrapper } from 'src/app/model/error-wrapper.model';
import { Router } from '@angular/router';

import { Login } from 'src/app/model/login.model';
import { AuthService } from './../../../services/auth.service';
import { LocalStorage } from 'src/app/services/storage.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    error: ErrorWrapper = { data: '', metadata: '', errors: [] };

    get f() { return this.loginForm.controls; }

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private localStorage: LocalStorage
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login(login: Login) {
        this.error = { ...this.error, errors: [] };

        if (!this.loginForm.valid) {
            Object.keys(this.loginForm.controls).forEach(key => this.loginForm.controls[key].markAsDirty());
            return;
        }

        this.authService.login(login)
            .subscribe(res => {
                debugger;
                this.localStorage.set('jwt', res);
                this.router.navigateByUrl('/services');
            },
                error => this.error = error.error)
    }

}
