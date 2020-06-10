import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-point-source',
    templateUrl: './point-source.component.html',
    styleUrls: ['./point-source.component.scss']
})
export class PointSourceComponent implements OnInit {

    items: any[] = [{
        id: 1,
        icon: 'screen-icon',
        value: 'Pay off the right loans'
    }, {
        id: 2,
        icon: 'coin-icon',
        value: 'Pay more than the minimum'
    }, {
        id: 3,
        icon: 'group-icon',
        value: 'See if Refi is right for you'
    }];

    constructor() {
    }

    ngOnInit(): void {
    }

    public setPage(page?: any): number {
        return page;
    }
}
