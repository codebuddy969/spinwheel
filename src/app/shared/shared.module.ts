import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    LogoComponent,
    BtnPrimaryComponent,
    BtnSecondaryComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    FormComponent,
    UsernameComponent,
    PasswordComponent,
    PersonalCodeComponent,
    AccountNumberComponent,
    PlainDonutComponent,
    ProgressChartComponent,
    ProgressDonutComponent,
    ProjectionsChartComponent
} from './components';

import {MediaDirective} from './directives';
import {NumIteratorPipe, YearsIteratorPipe} from './pipes';

@NgModule({
    declarations: [
        LogoComponent,
        BtnPrimaryComponent,
        BtnSecondaryComponent,
        MediaDirective,
        NavbarComponent,
        FooterComponent,
        FormComponent,
        SearchComponent,
        UsernameComponent,
        PasswordComponent,
        PersonalCodeComponent,
        AccountNumberComponent,
        PlainDonutComponent,
        ProgressChartComponent,
        ProgressDonutComponent,
        ProjectionsChartComponent,
        NumIteratorPipe,
        YearsIteratorPipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LogoComponent,
        BtnPrimaryComponent,
        BtnSecondaryComponent,
        MediaDirective,
        NavbarComponent,
        FooterComponent,
        FormComponent,
        SearchComponent,
        UsernameComponent,
        PasswordComponent,
        PersonalCodeComponent,
        AccountNumberComponent,
        PlainDonutComponent,
        ProgressChartComponent,
        ProgressDonutComponent,
        ProjectionsChartComponent,
        NumIteratorPipe,
        YearsIteratorPipe
    ]
})
export class SharedModule {
}
