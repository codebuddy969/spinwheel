import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeComponent} from './home.component';
import {SharedModule} from '@app/shared';
import {RouterModule} from '@angular/router';
import {routes} from './home-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [RouterModule]
})
export class HomeModule {
}
