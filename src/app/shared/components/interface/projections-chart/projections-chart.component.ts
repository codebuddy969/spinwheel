import {Component, ElementRef, AfterViewInit, ViewChild, Input, Renderer2, ChangeDetectorRef, OnInit} from '@angular/core';
import {NumIteratorPipe, YearsIteratorPipe} from '../../../pipes';

@Component({
    selector: 'app-projections-chart',
    templateUrl: './projections-chart.component.html',
    styleUrls: ['./projections-chart.component.scss'],
    providers: [NumIteratorPipe, YearsIteratorPipe]
})
export class ProjectionsChartComponent implements OnInit, AfterViewInit {

    @ViewChild('chart') chart: ElementRef;
    @Input() amount = 21;
    @Input() years = 43;

    constructor(private renderer: Renderer2, private cdk: ChangeDetectorRef) {
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
    }

    create(x, y): void {
        const el = this.renderer.createElement('div');
        el.classList.add('block');
        el.style.top = y + 'px';
        el.style.left = x + 'px';
        this.renderer.appendChild(this.chart.nativeElement, el);
    }

}
