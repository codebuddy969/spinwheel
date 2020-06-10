import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-debt-free-chart',
    templateUrl: './debt-free-chart.component.html',
    styleUrls: ['./debt-free-chart.component.scss']
})
export class DebtFreeChartComponent implements OnInit {

    @Input() total: number;
    @Input() paid: number;
    percentage: number | string;

    constructor() {
    }

    ngOnInit(): void {
        this.percentage = ((100 / this.total) * this.paid).toFixed(1);
    }

}
