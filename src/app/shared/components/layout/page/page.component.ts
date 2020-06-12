import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from '@app/core';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    @Input() link: string;
    @Input() header: string;
    @Input() subheader: string;
    @Input() button: string;
    @Input() icon: string;
    @Input() board = false;

    constructor(public navService: NavigationService) {
    }

    ngOnInit(): void {
    }

}
