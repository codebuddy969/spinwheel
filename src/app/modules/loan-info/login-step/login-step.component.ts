import {Component, OnInit} from '@angular/core';
import {NavigationService} from '@app/core';

@Component({
    selector: 'app-login-step',
    templateUrl: './login-step.component.html',
    styleUrls: ['./login-step.component.scss']
})
export class LoginStepComponent implements OnInit {

    constructor(public navService: NavigationService) {
    }

    ngOnInit(): void {
    }

}
