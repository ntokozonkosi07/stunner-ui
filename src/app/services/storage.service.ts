import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LocalStorage {

    constructor() { }

    set(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key: string): any {
        return localStorage.getItem(key);
    }
}