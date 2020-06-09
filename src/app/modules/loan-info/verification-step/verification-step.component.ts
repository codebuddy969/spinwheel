import {Component, OnInit, OnDestroy} from '@angular/core';
import {ElementsService} from '@app/core';
import {NavigationService} from '@app/core';

@Component({
    selector: 'app-verification-step',
    templateUrl: './verification-step.component.html',
    styleUrls: ['./verification-step.component.scss']
})
export class VerificationStepComponent implements OnInit, OnDestroy {

    public created = false;
    public message = 'Verified credentials';

    constructor(private elements: ElementsService, private navService: NavigationService) {
    }

    ngOnInit(): void {
        this.elements.elementsStatus(true);

        setTimeout(() => {
            this.message = 'Pulling Loan Information';
        }, 2000);

        setTimeout(() => {
            this.created = true;
            this.message = 'Your Loan Created';
        }, 4000);

        setTimeout(() => {
            this.navService.Navigate('/dashboard');
        }, 5000);
    }

    ngOnDestroy(): void {
        this.elements.elementsStatus(false);
    }
}
