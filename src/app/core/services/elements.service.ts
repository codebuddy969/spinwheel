import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ElementsService {

    private disabled = new BehaviorSubject<boolean>(false);
    status = this.disabled.asObservable();

    elementsStatus(state: boolean): void {
        this.disabled.next(state);
    }
}
