import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {MainComponent} from './main.component';
import {routes} from './main.routing';

import {CarouselModule} from 'primeng/carousel';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        CarouselModule
    ]
})
export class MainModule {
}
