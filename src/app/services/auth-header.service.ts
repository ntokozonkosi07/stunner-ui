import { HttpHeaders } from "@angular/common/http";
import { flow } from 'lodash';

import { LocalStorage } from './storage.service';

const createEmptyHeaders = (): HttpHeaders => new HttpHeaders();

const addAcceptAll = (headers: HttpHeaders): HttpHeaders => headers.set('Accept', '*/*');

const addAuthToken = (headers: HttpHeaders): HttpHeaders => {
    const { accessToken } = new LocalStorage().get('jwt');

    if(accessToken){
        headers.set('Authorization', `Bearer ${accessToken}`);
    }

    return headers;
}

const noCache = (headers: HttpHeaders): HttpHeaders => {
    return headers
        .set('Cache-Control', 'no-cache')
        .set('Pragma', 'no-cache');
}

export const createAuthRequestHeaders = flow([createEmptyHeaders, addAcceptAll, addAuthToken, noCache])