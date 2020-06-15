import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-btn-secondary',
    templateUrl: './btn-secondary.component.html',
    styleUrls: ['./btn-secondary.component.scss']
})
export class BtnSecondaryComponent implements OnInit {

    @Input() icon: string;
    @Input() link: string;
    @Input() text: string;
    @Input() button: boolean;
    @Input() disabled: boolean;

    @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

}
