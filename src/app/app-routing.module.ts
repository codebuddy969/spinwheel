import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'connect-loan',
        loadChildren: () =>
            import('./modules/connect-loan/connect-loan.module').then((m) => m.ConnectLoanModule),
    },
    {
        path: 'select-loan',
        loadChildren: () =>
            import('./modules/select-loan/select-loan.module').then((m) => m.SelectLoanModule),
    },
    {
        path: 'loan-info',
        loadChildren: () =>
            import('./modules/loan-info/loan-info.module').then((m) => m.LoanInfoModule),
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./modules/main/main.module').then((m) => m.MainModule),
    },
    {
        path: 'more-info',
        loadChildren: () =>
            import('./modules/more-info/more-info.module').then((m) => m.MoreInfoModule),
    },
    {
        path: 'set-goal',
        loadChildren: () =>
            import('./modules/set-goal/set-goal.module').then((m) => m.SetGoalModule),
    },
    {
        path: 'point-source',
        loadChildren: () =>
            import('./modules/point-source/point-source.module').then((m) => m.PointSourceModule),
    },
    {
        path: 'personalized-plan',
        loadChildren: () =>
            import('./modules/personalized-plan/personalized-plan.module').then((m) => m.PersonalizedPlanModule),
    },
    {
        path: 'goals-plan',
        loadChildren: () =>
            import('./modules/goals-plan/goals-plan.module').then((m) => m.GoalsPlanModule),
    },
    {
        path: '**',
        redirectTo: '/',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        initialNavigation: 'enabled',
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
