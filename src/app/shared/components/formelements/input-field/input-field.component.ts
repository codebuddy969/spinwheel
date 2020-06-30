import {Component, Input, ViewChild} from '@angular/core';
import {CreateAccessorFor, FormControlBase} from '../form-control';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss'],
    providers: CreateAccessorFor(InputFieldComponent)
})
export class InputFieldComponent extends FormControlBase {

    @Input() type: string;

    @Input() label: string;

    @Input() icon: string;

    @Input() min: number;

    @Input() pattern = '';
}
