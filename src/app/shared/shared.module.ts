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
    ProjectionsChartComponent,
    NavMenuComponent,
    DebtFreeChartComponent,
    PageComponent,
    ExtraPaymentSliderComponent,
    PayAmountChartComponent,
    RemainingTimeChartComponent
} from './components';

import {MediaDirective} from './directives';
import {NumIteratorPipe, YearsIteratorPipe} from './pipes';

import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';

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
        YearsIteratorPipe,
        NavMenuComponent,
        DebtFreeChartComponent,
        PageComponent,
        ExtraPaymentSliderComponent,
        PayAmountChartComponent,
        RemainingTimeChartComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        SplitButtonModule,
        SliderModule
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
        YearsIteratorPipe,
        NavMenuComponent,
        DebtFreeChartComponent,
        PageComponent,
        ExtraPaymentSliderComponent,
        PayAmountChartComponent,
        RemainingTimeChartComponent
    ]
})
export class SharedModule {
}
