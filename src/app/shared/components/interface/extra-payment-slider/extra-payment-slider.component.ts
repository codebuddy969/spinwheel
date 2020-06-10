import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-extra-payment-slider',
    templateUrl: './extra-payment-slider.component.html',
    styleUrls: ['./extra-payment-slider.component.scss']
})
export class ExtraPaymentSliderComponent implements OnInit {

    amount = 100;

    constructor() {
    }

    ngOnInit(): void {
    }

}
