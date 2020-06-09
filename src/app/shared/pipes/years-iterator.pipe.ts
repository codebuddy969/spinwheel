import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsIterator'
})
export class YearsIteratorPipe implements PipeTransform {
    transform(value, args?: string[]): any {
        const res = [];
        for (let i = 1; i <= 5; i++) {
            res.push(Math.round((value / 6) * i));
        }
        res.push(value);
        return res;
    }
}
