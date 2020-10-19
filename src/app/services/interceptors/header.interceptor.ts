import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { createAuthRequestHeaders } from './../auth-header.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            headers: this.mergeHeaders(createAuthRequestHeaders(), req.headers)
        });

        return next.handle(req);
    }

    mergeHeaders(newHeaders: HttpHeaders, originalHeaders: HttpHeaders): HttpHeaders {
        
        originalHeaders.keys().forEach(key => {
            newHeaders = newHeaders.set(key, originalHeaders.get(key));
        })

        return newHeaders;
    }

}