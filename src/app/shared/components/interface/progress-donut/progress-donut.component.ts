import {Component, AfterViewInit, Renderer2, Inject, ElementRef, ViewChild, Input, ChangeDetectorRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';

interface IPathSequence {
    x: string | number;
    y: string | number;
}

@Component({
    selector: 'app-progress-donut',
    templateUrl: './progress-donut.component.html',
    styleUrls: ['./progress-donut.component.scss']
})
export class ProgressDonutComponent implements AfterViewInit {

    @Input() principal: number;
    @Input() interest: number;
    @ViewChild('donut') donut: ElementRef;

    totalAmount = 0;
    principalP: number | string = 0;
    interestP: number | string = 0;

    constructor(
        private renderer: Renderer2,
        private cdk: ChangeDetectorRef,
        @Inject(DOCUMENT) private document: Document) {
    }

    ngAfterViewInit(): void {
        this.totalAmount = this.principal + this.interest;
        this.principalP = ((100 / this.totalAmount) * this.principal).toFixed(1);
        this.interestP = ((100 / this.totalAmount) * this.interest).toFixed(1);
        this.cdk.detectChanges();

        const principal = Math.round((360 / 100) * <any>this.principalP);
        const interest = Math.round((360 / 100) * <any>this.interestP);

        this.createSection(- 60, interest, '#F9CE46');
        this.createSection(interest - 50, principal - 20, '#F3A33A');
    }

    createSection(offset: number = 0, radius: number = 90, color: string): void {

        let data = '';
        let initial: IPathSequence;

        const path = this.document.createElementNS('http://www.w3.org/2000/svg', 'path');

        /** Generate sections external path */

        for (let i = offset; i <= radius + offset; i++) {

            const item = this.generateDonutSection(180, 180, 180, i);

            if (i === offset) {
                const item2 = this.generateDonutSection(180, 180, 170, i - 4.2);
                const item3 = this.generateDonutSection(180, 180, 174, i - 3.8);
                const item4 = this.generateDonutSection(180, 180, 177, i - 3.0);
                const item5 = this.generateDonutSection(180, 180, 179, i - 2);
                data += 'L' + item2.x + ',' + item2.y + ' ';
                data += 'L' + item3.x + ',' + item3.y + ' ';
                data += 'L' + item4.x + ',' + item4.y + ' ';
                data += 'L' + item5.x + ',' + item5.y + ' ';

                initial = {x: item2.x, y: item2.y};
            }

            if (i === radius + offset) {
                const item2 = this.generateDonutSection(180, 180, 180, i - 3.5);
                const item3 = this.generateDonutSection(180, 180, 177, i - 1.5);
                const item4 = this.generateDonutSection(180, 180, 174, i - 0.5);
                const item5 = this.generateDonutSection(180, 180, 171, i - 0);
                data += 'L' + item2.x + ',' + item2.y + ' ';
                data += 'L' + item3.x + ',' + item3.y + ' ';
                data += 'L' + item4.x + ',' + item4.y + ' ';
                data += 'L' + item5.x + ',' + item5.y + ' ';
            }

            if (i === offset + 1 || i === offset + 2 || i === offset + 3 || i === offset + 4) {
                continue;
            }

            data += 'L' + item.x + ',' + item.y + ' ';
        }

        /** Generate sections inner path */

        for (let i = 360 - offset - radius; i <= 360 - offset; i++) {

            const item = this.generateDonutSection(180, 180, 145, -i);

            data += 'L' + item.x + ',' + item.y + ' ';

            if (i === 360 - offset - radius) {
                const item2 = this.generateDonutSection(180, 180, 145, -i - 3.5);
                const item3 = this.generateDonutSection(180, 180, 145 + 3, -i - 1.5);
                const item4 = this.generateDonutSection(180, 180, 145 + 6, -i - 0.5);
                const item5 = this.generateDonutSection(180, 180, 145 + 9, -i);
                data += 'L' + item5.x + ',' + item5.y + ' ';
                data += 'L' + item4.x + ',' + item4.y + ' ';
                data += 'L' + item3.x + ',' + item3.y + ' ';
                data += 'L' + item2.x + ',' + item2.y + ' ';
            }

            if (i === 360 - offset) {
                const item2 = this.generateDonutSection(180, 180, 145 + 9, -i - 4);
                const item3 = this.generateDonutSection(180, 180, 145 + 6, -i - 3.2);
                const item4 = this.generateDonutSection(180, 180, 145 + 3, -i - 2);
                const item5 = this.generateDonutSection(180, 180, 145 + 1, -i - 1);
                data += 'L' + item5.x + ',' + item5.y + ' ';
                data += 'L' + item4.x + ',' + item4.y + ' ';
                data += 'L' + item3.x + ',' + item3.y + ' ';
                data += 'L' + item2.x + ',' + item2.y + ' ';
            }
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
