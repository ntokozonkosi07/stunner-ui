import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StepperService {
    private _navigation= new BehaviorSubject<number>(0);

    get navigation(){
        return this._navigation.asObservable();
    } 

    nextPage(){
        this._navigation.next(this._navigation.value+1);
    }
    prevPage(){
        this._navigation.next(this._navigation.value-1);
    }
}