import {Routes} from '@angular/router';
import {InviteFormComponent} from './invite-form';
import {InviteSentComponent} from './invite-sent';

export const routes: Routes = [
    {
        path: '',
        component: InviteFormComponent
    },
    {
        path: 'send',
        component: InviteSentComponent
    },
];
