import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-amount-slider',
    templateUrl: './amount-slider.component.html',
    styleUrls: ['./amount-slider.component.scss']
})
export class AmountSliderComponent implements OnInit {

    @Input() max = 1000;
    @Input() title = 'Extra Monthly Payment';
    @Input() subtitle = '';
    @Input() amount = 100;

    constructor() {
    }

    ngOnInit(): void {
    }

}
