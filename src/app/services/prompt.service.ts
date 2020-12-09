import { Injectable, TemplateRef } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

import { Flyout } from '../enum/flyout.enum';

@Injectable({
    providedIn: 'root'
})
export class PromptService {

    private _showError = new Subject<any>();
    public OnShowError = this._showError.asObservable();

    private _flyoutToggle = new Subject<{toggle:Flyout, template?: TemplateRef<any>, context?: any}>();
    public onShowFlyout = this._flyoutToggle.asObservable();
    

    constructor(private toastr: ToastrService) {}

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

    showFlyout(template?: TemplateRef<any>, context?: any){
        this._flyoutToggle.next({
            toggle: Flyout.OPEN,
            template,
            context
        });
    }

    closeFlyout() {
        this._flyoutToggle.next({toggle: Flyout.CLOSED});
    }
}