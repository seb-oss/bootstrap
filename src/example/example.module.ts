import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertsComponent } from './components/alerts/alerts.component';
import { TabsComponent } from './components/tabs/tabs.component';
import {FormsModule} from '@angular/forms';
import { TablesComponent } from './components/tables/tables.component';
import {ExemplifyModule} from 'angular-exemplify';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import {
    FormsComponent,
    PersonalIdentityNumberDirective,
    ValidationMessagePipe
} from './components/forms/forms.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckboxesAndSlideTogglesComponent } from './components/checkboxes-and-slide-toggles/checkboxes-and-slide-toggles.component';
import {RouterModule} from '@angular/router';
import { IconsComponent } from './components/icons/icons.component';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalsComponent } from './components/modals/modals.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TypographyComponent } from './components/typography/typography.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DatepickerSimpleComponent } from './components/datepicker/datepicker-simple/datepicker-simple.component';
import { DatepickerInputComponent } from './components/datepicker/datepicker-input/datepicker-input.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { ColorsComponent } from './components/colors/colors.component';
import { ToastNotificationsComponent } from './components/toast-notifications/toast-notifications.component';
import {SpinnersComponent} from './components/spinners/spinners.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import {IncludeComponent} from '../app/components/include/include.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExemplifyModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
      ButtonsComponent,
      AlertsComponent,
      TabsComponent,
      TablesComponent,
      BreadcrumbsComponent,
      FormsComponent,
      PersonalIdentityNumberDirective,
      ValidationMessagePipe,
      CheckboxesAndSlideTogglesComponent,
      IconsComponent,
      InputGroupComponent,
      ListGroupComponent,
      SpinnersComponent,
      DropdownsComponent,
      CardsComponent,
      ModalsComponent,
      PaginationComponent,
      TooltipsComponent,
      AccordionComponent,
      TypographyComponent,
      SkeletonLoaderComponent,
      DatepickerComponent,
      DatepickerSimpleComponent,
      DatepickerInputComponent,
      NavbarComponent,
      RadioButtonsComponent,
      ColorsComponent,
      ToastNotificationsComponent,
      ButtonGroupComponent,
    IncludeComponent
  ],
  exports: [ButtonsComponent]
})
export class ExampleModule { }
