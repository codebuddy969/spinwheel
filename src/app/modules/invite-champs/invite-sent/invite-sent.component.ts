import {Component, OnInit, OnDestroy} from '@angular/core';
import {ElementsService} from '@app/core';

@Component({
    selector: 'app-invite-sent',
    templateUrl: './invite-sent.component.html',
    styleUrls: ['./invite-sent.component.scss']
})
export class InviteSentComponent implements OnInit, OnDestroy {

    constructor(public elements: ElementsService) {
    }

    ngOnInit(): void {
        this.elements.elementsStatus(true);
    }

    ngOnDestroy(): void {
        this.elements.elementsStatus(false);
    }
}
