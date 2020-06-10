import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MoreInfoComponent} from './more-info.component';
import {SharedModule} from '@app/shared';
import {routes} from './more-info.routing';

@NgModule({
    declarations: [MoreInfoComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ]
})
export class MoreInfoModule {
}
