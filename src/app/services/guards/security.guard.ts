import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { observable, Observable } from 'rxjs';

import { AuthService } from '../auth.service';

@Injectable()
export class SecurityGuard implements CanActivate {

    constructor(
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable(observer => {
            observer.next(this.authService.isLoggedin());
        });
    }

}