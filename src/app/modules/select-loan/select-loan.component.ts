import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '@app/core';
import {HttpClient} from '@angular/common/http';

interface ICards {
    name: string;
    image: string;
}

@Component({
    selector: 'app-select-loan',
    templateUrl: './select-loan.component.html',
    styleUrls: ['./select-loan.component.scss'],
    providers: [HttpClient]
})
export class SelectLoanComponent implements OnInit {

    @ViewChild('slide') private readonly slide: ElementRef<any>;

    width: number | string;
    cards: ICards[] = [];
    margin = 0;
    count = 0;

    constructor(public navService: NavigationService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<ICards[]>('./assets/mockups/select-loan.mockup.json')
            .subscribe(data => {
                this.cards = data;
                this.count = Math.ceil(this.cards.length / 2);
                this.width = this.cards.length > 6 ? this.count * 382 - 24 : 'auto';
            });
    }

    handleChange(value: number): void {
        if (this.width > this.slide.nativeElement.clientWidth) {
            this.margin = (( <number> this.width - this.slide.nativeElement.clientWidth) / 100) * <number> value;
        }
    }
}
