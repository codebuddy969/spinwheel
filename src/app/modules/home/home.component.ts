import {Component, OnInit, OnDestroy} from '@angular/core';
import {ElementsService} from '@app/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor(public elements: ElementsService) {
    }

    ngOnInit(): void {
        this.elements.elementsStatus(true);
    }

    ngOnDestroy(): void {
        this.elements.elementsStatus(false);
    }
}
