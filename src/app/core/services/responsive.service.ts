import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';

@Injectable({
    providedIn: 'root',
})
export class ResponsiveService {

    public screenType = new BehaviorSubject<boolean>(false);
    public smallScreen = this.screenType.asObservable();

    constructor(private breakpoint: BreakpointObserver) {
        this.breakpoint
            .observe(['(min-width: 768px)'])
            .subscribe((state: BreakpointState) => {
                state.matches ? this.screenType.next(false) : this.screenType.next(true);
            });
        this.breakpoint
            .observe(['(max-width: 767px)'])
            .subscribe((state: BreakpointState) => {
                state.matches ? this.screenType.next(true) : this.screenType.next(false);
            });
    }
}
