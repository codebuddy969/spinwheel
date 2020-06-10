import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

    items;

    constructor() {

    }

    ngOnInit(): void {
        this.items = [
            {label: 'Profile', icon: 'icon-user', routerLink: ['/setup']},
            {label: 'Options', icon: 'icon-cog', routerLink: ['/setup']},
            {separator: true},
            {label: 'Log out', icon: 'icon-logout', routerLink: ['/setup']}
        ];
    }

}
