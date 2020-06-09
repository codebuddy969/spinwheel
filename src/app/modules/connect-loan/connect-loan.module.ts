import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './connect-loan-routing';
import {ConnectLoanComponent} from './connect-loan.component';

@NgModule({
    declarations: [ConnectLoanComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class ConnectLoanModule {
}
