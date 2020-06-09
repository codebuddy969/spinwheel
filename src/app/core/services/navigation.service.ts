import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(
        private readonly router: Router,
        private readonly location: Location,
    ) {}

    public Back(): void {
        return this.location.back();
    }

    public Navigate(url: string): void {
        this.router.navigate([url]);
    }
}
