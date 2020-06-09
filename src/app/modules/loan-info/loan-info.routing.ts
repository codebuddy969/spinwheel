import {Routes} from '@angular/router';
import {LoginStepComponent} from './login-step';
import {AccountStepComponent} from './account-step';
import {VerificationStepComponent} from './verification-step';

export const routes: Routes = [
    {
        path: '',
        component: LoginStepComponent
    },
    {
        path: 'account',
        component: AccountStepComponent
    },
    {
        path: 'verification',
        component: VerificationStepComponent
    }
];
