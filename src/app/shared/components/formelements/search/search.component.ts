import {Component, Input} from '@angular/core';
import {CreateAccessorFor, FormControlBase} from '../form-control';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: CreateAccessorFor(SearchComponent)
})
export class SearchComponent extends FormControlBase {

    @Input() form: any;
}
