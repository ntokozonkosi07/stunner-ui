import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Signup } from '../model/signup.model';
import { Login } from '../model/login.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    signUp(signup: Signup): Observable<Signup> {
        const headers = new HttpHeaders({ 'x-skip-error': '500' });

        return this.http.post<Signup>('/auth/SignUp', signup, { headers });
    }

    login(login: Login) {
        const headers = new HttpHeaders({ 'x-skip-error': '500' });
        
        return this.http.post<any>('/auth', login, { headers });
    }
}