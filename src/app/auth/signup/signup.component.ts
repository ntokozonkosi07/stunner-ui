import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CustomvalidationService } from './../../services/validators/custom-validators.service';
import { AuthService } from './../../services/auth.service';
import { Signup } from 'src/app/model/signup.model';

@Component({
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    public signupForm: FormGroup;

    errors: [] = [];

    get f() { return this.signupForm.controls; }

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private customValidator: CustomvalidationService,
        private authService: AuthService,
        private toastr: ToastrService) { }

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
            confirmPassword: ['', Validators.required]
        },
            {
                validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
            })
    }

    backToLogin(event) {
        this.router.navigateByUrl('auth/login');
    }

    onSubmit(signup: Signup) {
        if(!this.signupForm.valid){
            this.signupForm.markAllAsTouched();
            return;
        }

        this.authService.signUp(signup)
        .subscribe(res => {
            debugger;
            this.toastr.success("Registered succesfuly")
            this.backToLogin(null);
        }, error => {
            this.errors = error.error.errors;
            this.signupForm.get('password').reset();
            this.signupForm.get('confirmPassword').reset();
        })
    }
}