import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { PrincipleServiceResponse } from '../model/principle-service.model';

@Injectable()
export class PrincipleService {

    constructor(private _http: HttpClient) { }

    getServices(): Observable<any[]> {
        return this._http.get<PrincipleServiceResponse>('/api/services')
            .pipe(
                map((x: PrincipleServiceResponse) => {
                    return x._embedded;
                }),
                pluck('serviceList')
            );
    }
}