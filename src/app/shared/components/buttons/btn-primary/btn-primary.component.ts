import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-btn-primary',
    templateUrl: './btn-primary.component.html',
    styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent implements OnInit {

    @Input() icon: string;
    @Input() link: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
