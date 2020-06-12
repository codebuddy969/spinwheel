import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-personalized-plan',
    templateUrl: './personalized-plan.component.html',
    styleUrls: ['./personalized-plan.component.scss']
})
export class PersonalizedPlanComponent implements OnInit {

    roundChecked = true;
    paymentChecked = false;

    constructor() {
    }

    ngOnInit(): void {
    }

}
