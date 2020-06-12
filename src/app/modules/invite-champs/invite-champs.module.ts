import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InviteChampsComponent} from './invite-champs.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@app/shared';
import {routes} from './invite-champs.routing';
import {InviteFormComponent} from './invite-form';
import {InviteSentComponent} from './invite-sent';

@NgModule({
    declarations: [
        InviteChampsComponent,
        InviteFormComponent,
        InviteSentComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule
    ]
})
export class InviteChampsModule {
}
