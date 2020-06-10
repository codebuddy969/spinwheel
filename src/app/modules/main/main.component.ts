import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    data = [
        {
            name: 'nelnet',
            amount: 4000
        },
        {
            name: 'navient',
            amount: 6800
        },
        {
            name: 'mohela',
            amount: 2000
        },
        {
            name: 'heartland',
            amount: 9268
        },
        {
            name: 'nelnet',
            amount: 4000
        },
        {
            name: 'navient',
            amount: 6800
        },
        {
            name: 'mohela',
            amount: 2000
        },
        {
            name: 'heartland',
            amount: 9268
        }
    ];

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


    public addItem(): void {
        this.items.push({id: '3', value: 66});
        console.log(this.items.length);
        this.setPage(this.items.length);
    }

    public setPage(page?: any): number {
        return page;
    }

}
