import {Component} from '@angular/core';
import {FormControlBase, CreateAccessorFor} from '../form-control';

@Component({
    selector: 'app-username',
    templateUrl: './username.component.html',
    styleUrls: ['../styles.scss'],
    providers: CreateAccessorFor(UsernameComponent)
})
export class UsernameComponent extends FormControlBase {

}
