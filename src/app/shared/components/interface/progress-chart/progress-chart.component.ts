import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-progress-chart',
    templateUrl: './progress-chart.component.html',
    styleUrls: ['./progress-chart.component.scss']
})
export class ProgressChartComponent implements OnInit {

    @Input() total: number;
    @Input() paid: number;
    percentage: number | string;

    constructor() {
    }

    ngOnInit(): void {
        this.percentage = ((100 / this.total) * this.paid).toFixed(1);
    }

}
