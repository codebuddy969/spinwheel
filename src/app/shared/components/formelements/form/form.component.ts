import {Component, AfterViewInit, ViewChild, ContentChildren, QueryList, ChangeDetectorRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormControlBase, ValidationRules} from '../form-control';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {

    @ViewChild('formEl') formelement: NgForm;

    @ContentChildren(FormControlBase, { descendants: true })
    private readonly controls: QueryList<FormControlBase>;

    constructor(private cdk: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.controls.forEach(c => {
            this.formelement.form.addControl(c.name, c.control);
            this.formelement.form.controls[c.name].setValidators(ValidationRules[c.name]);
            this.formelement.form.controls[c.name].updateValueAndValidity();
        });
        this.cdk.detectChanges();
    }

    formSubmit() {
        console.log('sadasdasd');
        console.log(this.formelement);
    }
}
