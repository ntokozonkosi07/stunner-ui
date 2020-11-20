import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    debugger;
                    if (req.headers.has('x-skip-error')) {
                        debugger;
                        return throwError({
                            ...error,
                            error: {
                                errors: error.error.errors.map(e => {
                                    switch(e.code){
                                        case 'NotAuthorizedException':
                                            return {
                                                ...e,
                                                message: 'Incorrect username or password.'
                                            }
                                        default:
                                            return e;
                                    }
                                })
                            }
                        });
                    }

                })
            )
    }

}