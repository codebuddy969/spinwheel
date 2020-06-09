import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ElementsService} from '@app/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    status: boolean;

    constructor(private elements: ElementsService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.elements.status.subscribe(status => {
            this.status = status;
            this.cdr.detectChanges();
        });
    }

}
