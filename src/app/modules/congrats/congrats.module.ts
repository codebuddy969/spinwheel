import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CongratsComponent} from './congrats.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './congrats.routing';

@NgModule({
    declarations: [CongratsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class CongratsModule {
}
