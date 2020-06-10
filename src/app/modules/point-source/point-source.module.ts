import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '@app/shared';
import {RouterModule} from '@angular/router';
import {PointSourceComponent} from './point-source.component';
import {routes} from './point-source.routing';

import {CarouselModule} from 'primeng/carousel';

@NgModule({
    declarations: [PointSourceComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        CarouselModule
    ]
})
export class PointSourceModule {
}
