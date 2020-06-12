import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {FormsModule} from '@angular/forms';
import {PersonalizedPlanComponent} from './personalized-plan.component';
import {routes} from './personalized-plan.routing';

import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
    declarations: [PersonalizedPlanComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule,
        InputSwitchModule
    ]
})
export class PersonalizedPlanModule {
}
