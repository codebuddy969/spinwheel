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
