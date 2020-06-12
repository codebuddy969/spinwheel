import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoalsPlanComponent} from './goals-plan.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './goals-plan.routing';

@NgModule({
    declarations: [GoalsPlanComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class GoalsPlanModule {
}
