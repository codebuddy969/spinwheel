import {Component, OnInit} from '@angular/core';
import {NavigationService} from '@app/core';

@Component({
    selector: 'app-account-step',
    templateUrl: './account-step.component.html',
    styleUrls: ['./account-step.component.scss']
})
export class AccountStepComponent implements OnInit {

    constructor(public navService: NavigationService) {
    }

    ngOnInit(): void {
    }

}
