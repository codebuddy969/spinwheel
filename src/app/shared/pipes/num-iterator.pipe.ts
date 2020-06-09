import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numIterator'
})
export class NumIteratorPipe implements PipeTransform {
    transform(value, args?: string[]): any {
        const res = [];
        res.push(0);
        for (let i = 1; i <= 4; i++) {
            res.push(Math.round((value / 4) * i));
        }
        return res.reverse();
    }
}
