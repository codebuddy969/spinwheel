import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './select-loan.routing';
import {SelectLoanComponent} from './select-loan.component';

import {SliderModule} from 'primeng/slider';

@NgModule({
    declarations: [SelectLoanComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        SliderModule,
        HttpClientModule
    ]
})
export class SelectLoanModule {
}
