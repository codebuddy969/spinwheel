import {forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

export abstract class FormControlBase<T = any> implements ControlValueAccessor {

    @Input() id: string;

    @Input() name: string;

    @Input() required: boolean;

    @Input() disabled: boolean;

    @Input() readonly: boolean;

    public readonly control = new FormControl();

    @Output()
    public get value(): T {
        return this.control?.value;
    }

    public set value(value: T) {
        if (this.control?.value !== value) {
            this.control.setValue(value);
        }
    }

    private onChanged: any = (_: any) => {}
    private onTouched: any = (_: any) => {}

    public writeValue(value: any): void {
        if (this.control?.value !== value) this.control.setValue(value);
    }

    public registerOnChange(fn: any): void {
        this.onChanged = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}

export function CreateAccessorFor<T = FormControlBase>(control: T): any {
    return [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => control),
            multi: true
        },
        {
            provide: FormControlBase,
            useExisting: forwardRef(() => control),
            multi: true
        }
    ];
}
