import {Directive} from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[appValidation]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useValue: ValidationDirective,
            multi: true
        }
    ]
})
export class ValidationDirective {
}
