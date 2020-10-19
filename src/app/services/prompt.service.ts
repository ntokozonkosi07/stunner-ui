import { Injectable, TemplateRef } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PromptService {

    private _showError = new Subject<any>();
    public OnShowError = this._showError.asObservable();

    constructor(private toastr: ToastrService) { }

    successToast(message: string, title?: string,) {
        this.toastr.success(message, title);
    }

    public showCustomError(context?: any, template?: TemplateRef<any>){
        if(!context){
            this._showError.next([]);
        } else {
            this._showError.next([template, context]);
        }
    }
}