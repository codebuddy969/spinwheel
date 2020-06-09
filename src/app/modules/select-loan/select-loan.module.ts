import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './select-loan.routing';
import {SelectLoanComponent} from './select-loan.component';

import {SliderModule} from 'primeng/slider';

@NgModule({
    declarations: [SelectLoanComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        SliderModule
    ]
})
export class SelectLoanModule {
}
