import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SetGoalComponent} from './set-goal.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './set-goal.routing';

@NgModule({
    declarations: [SetGoalComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class SetGoalModule {
}
