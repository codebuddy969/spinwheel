import {AfterViewInit, Component, Input} from '@angular/core';
import {NavigationService} from '@app/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit {

    @Input() link: string;
    @Input() header: string;
    @Input() subheader: string;
    @Input() button: string;
    @Input() icon: string;
    @Input() board = false;
    @Input() form: any;

    disabled = true;

    constructor(public navService: NavigationService, private router: Router) {
    }

    ngAfterViewInit(): void {
        this.form?.formelement.statusChanges.subscribe(s => this.disabled = s === 'VALID' ? false : true);
    }

    submitForm(event: MouseEvent): void {
        this.router.navigate(['/invite-champions/send']);
        // this.form.formelement.ngSubmit.emit();
    }

}
