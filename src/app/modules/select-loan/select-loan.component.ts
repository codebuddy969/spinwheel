import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from '@app/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-select-loan',
    templateUrl: './select-loan.component.html',
    styleUrls: ['./select-loan.component.scss'],
    providers: [HttpClient]
})
export class SelectLoanComponent implements OnInit {

    @ViewChild('slide') private readonly slide: ElementRef<any>;

    cards = [
        {
            name: 'nelnet',
            image: 'nelnet.png'
        },
        {
            name: 'navient',
            image: 'navient.png'
        },
        {
            name: 'mohela',
            image: 'mohela.png'
        },
        {
            name: 'heartland',
            image: 'heartland.png'
        },
        {
            name: 'cornerstone',
            image: 'cornerstone.png'
        },
        {
            name: 'granite',
            image: 'granite.png'
        },
        {
            name: 'mohela',
            image: 'mohela.png'
        },
        {
            name: 'cornerstone',
            image: 'cornerstone.png'
        },
        {
            name: 'heartland',
            image: 'heartland.png'
        }
    ];

    margin: number = 0;
    count: number = Math.ceil(this.cards.length / 2);
    width: number | string = this.cards.length > 6 ? this.count * 382 - 24 : 'auto';

    constructor(public navService: NavigationService, private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('./assets/mockups/select-loan.mockup.json')
            .subscribe(data => console.log(data));
    }

    handleChange(value: number): void {
        if (this.width > this.slide.nativeElement.clientWidth) {
            this.margin = (( <number> this.width - this.slide.nativeElement.clientWidth) / 100) * <number> value;
        }
    }
}
