import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ElementsService} from '@app/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public year: number = new Date().getFullYear();

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
