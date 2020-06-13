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
    selector: 'app-donut-rounded',
    templateUrl: './donut-rounded.component.html',
    styleUrls: ['./donut-rounded.component.scss']
})
export class DonutRoundedComponent implements AfterViewInit {

    @Input() days = 0;
    @Input() total = 0;
    @Input() saved = 0;
    @Input() color = '#9B7FC7';
    @ViewChild('donut') donut: ElementRef;

    amount: number | string = 0;

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document,
        private cdk: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {
        const daysPercentage = (360 / this.total) * this.saved;
        this.createSection(0, daysPercentage, '#F3A33A');
        this.createSection(daysPercentage, 360 - daysPercentage, this.color);
    }


    createSection(offset: number = 0, radius: number = 90, color?: string): void {

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

            const item = this.generateDonutSection(180, 180, 155, -i);

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
