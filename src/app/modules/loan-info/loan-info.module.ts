import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {LoanInfoComponent} from './loan-info.component';
import {AccountStepComponent} from './account-step/account-step.component';
import {LoginStepComponent} from './login-step/login-step.component';
import {VerificationStepComponent} from './verification-step/verification-step.component';
import {routes} from './loan-info.routing';

import {SliderModule} from 'primeng/slider';

@NgModule({
    declarations: [
        LoanInfoComponent,
        AccountStepComponent,
        LoginStepComponent,
        VerificationStepComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        SliderModule
    ]
})
export class LoanInfoModule {
}
