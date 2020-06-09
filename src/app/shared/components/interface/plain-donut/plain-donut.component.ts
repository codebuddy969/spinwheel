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
    selector: 'app-plain-donut',
    templateUrl: './plain-donut.component.html',
    styleUrls: ['./plain-donut.component.scss']
})
export class PlainDonutComponent implements AfterViewInit {

    @Input() data: Array<IDonutData>;
    @ViewChild('donut') donut: ElementRef;

    private lastPosition = 0;
    totalAmount = 0;
    colors = ['F3A33A', 'F9CE46', '3734AB', '272395', '3B31AB', '4538B7', '634EDA', '816BE1'];

    constructor(
        private renderer: Renderer2,
        @Inject(DOCUMENT) private document: Document,
        private cdk: ChangeDetectorRef) {
    }

    ngAfterViewInit(): void {

        /** Sum total amount from every loan */

        this.data.forEach(item => this.totalAmount = this.totalAmount + item.amount);

        /** Generate donut section for each loan */

        this.data.forEach(item => {
            const color = '#' + this.colors[Math.floor(Math.random() * this.colors.length)];
            const sectionPercentage = Math.round((100 * item.amount) / this.totalAmount);
            const sectionDegrees = Math.round((360 / 100) * sectionPercentage);
            this.createSection(this.lastPosition, sectionDegrees, color);
            this.lastPosition = this.lastPosition + sectionDegrees;
            item.color = color;
        });

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
