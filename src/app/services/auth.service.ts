import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

import { Signup } from '../model/signup.model';
import { Login } from '../model/login.model';
import { LocalStorage } from './storage.service';

@Injectable()
export class AuthService {

    jwtHelper = new JwtHelperService();

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorage,
    ) { }

    signUp(signup: Signup): Observable<Signup> {
        const headers = new HttpHeaders({ 'x-skip-error': '500' });

        return this.http.post<Signup>('/auth/SignUp', signup, { headers });
    }

    login(login: Login) {
        const headers = new HttpHeaders({ 'x-skip-error': '500' });

        return this.http.post<any>('/auth', login, { headers });
    }

    isLoggedin(): boolean {
        const token= JSON.parse(this.localStorage.get('jwt'));
        if (!token) return false;

        return !this.jwtHelper.isTokenExpired(token.accessToken);
    }
}