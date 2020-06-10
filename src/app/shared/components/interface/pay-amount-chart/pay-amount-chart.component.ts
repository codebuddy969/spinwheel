import {Component, ElementRef, AfterViewInit, Input, ViewChild, Renderer2, Inject, ChangeDetectorRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';

interface IPathSequence {
    x: string | number;
    y: string | number;
}

interface IDonutData {
    name: string;
    amount: number;
    color?: string;
}

@Component({
    selector: 'app-pay-amount-chart',
    templateUrl: './pay-amount-chart.component.html',
    styleUrls: ['./pay-amount-chart.component.scss']
})
export class PayAmountChartComponent implements AfterViewInit {

    @Input() saved = 0;
    @Input() current = 0;
    @ViewChild('donut') donut: ElementRef;

    percentage: number | string = 0;

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document,
        private cdk: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        this.percentage = ((100 / this.current) * this.saved).toFixed(1);
        const sectionDegrees = Math.round((360 / 100) * <any>this.percentage);
        this.createSection(0, sectionDegrees, '#6848E2');
        this.createSection(sectionDegrees, 360 - sectionDegrees, '#B3A3F0');
        this.cdk.detectChanges();
    }

    createSection(offset: number = 0, radius: number = 90, color: string): void {

        let data = '';
        let initial: IPathSequence;

        const path = this.document.createElementNS('http://www.w3.org/2000/svg', 'path');

        /** Generate sections external path */

        for (let i = offset; i <= radius + offset; i++) {

            const item = this.generateDonutSection(180, 180, 180, i);

            if (i === offset) {
                initial = {x: item.x, y: item.y};
            }

            data += 'L' + item.x + ',' + item.y + ' ';
        }

        /** Generate sections inner path */

        for (let i = 360 - offset - radius; i <= 360 - offset; i++) {

            const item = this.generateDonutSection(180, 180, 145, -i);

            data += 'L' + item.x + ',' + item.y + ' ';
        }

        this.renderer.setAttribute(path, 'fill', color);
        this.renderer.setAttribute(path, 'd', 'M' + initial.x + ',' + initial.y + ' ' + data + ' Z');
        this.renderer.appendChild(this.donut.nativeElement, path);
    }

    generateDonutSection(originX, originY, rads, angleRadians): IPathSequence {
        return {
            x: rads * Math.cos(angleRadians * (3.14159265359 / 180)) + originX,
            y: rads * Math.sin(angleRadians * (3.14159265359 / 180)) + originY
        };
    }

}
