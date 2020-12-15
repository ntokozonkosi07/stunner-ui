import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { StepperService } from "src/app/components/stepper/stepper.module";
import { StepperBase } from "../stepper-base.interface";

@Component({
    selector: 'uploads-form',
    templateUrl: './uploads-form.component.html',
    styleUrls: ['./uploads-form.component.scss']
})
export class UploadsFormComponent implements StepperBase, OnInit {

    uploadForm: FormGroup;

    constructor(private _fb: FormBuilder, private _stepperService: StepperService) { }

    ngOnInit(): void {

    }

    createFormgroup(): FormGroup {
        this.uploadForm = this._fb.group({
            images: new FormArray([])
        })

        return this.uploadForm;
    }

    get images(){
        return this.uploadForm.get('images') as FormArray;
    }

    onSelect(event) {
        debugger;

        var mimeType = event.addedFiles[0].type;
        if (mimeType.match(/image\/*/) == null) {
            console.log("Only images are supported.");
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(event.addedFiles[0]);
        reader.onload = (_event) => {
            
            this.images.push(new FormControl({...event.addedFiles[0], imageSrc: reader.result}));
        }

        console.log(event);
        
    }

    close(index){
        debugger;
        this.images.removeAt(index);
    }

    submit(){
        if (!this.uploadForm.valid) {
            Object.keys(this.uploadForm.controls).forEach(key => this.uploadForm.controls[key].markAsDirty());
            return;
        }

        this._stepperService.nextPage();
    }
}