import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonsComponent} from './components/buttons/buttons.component';
import { CodeComponent } from './shared/components/code/code.component';
import {ButtonsMainComponent} from './components/buttons/buttons-main/buttons-main.component';
import { SnippetWrapperComponent } from './shared/components/snippet-wrapper/snippet-wrapper.component';
import {HttpClientModule} from '@angular/common/http';
import { ButtonsSizesComponent } from './components/buttons/buttons-sizes/buttons-sizes.component';
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
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowAltRight} from '@fortawesome/pro-light-svg-icons';
import { InputGroupComponent } from './components/input-group/input-group.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { LoadersComponent } from './components/loaders/loaders.component';
import { DropdownsComponent } from './components/dropdowns/dropdowns.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModalsComponent } from './components/modals/modals.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { AccordionComponent } from './components/accordion/accordion.component';
library.add(faArrowAltRight);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ExemplifyModule,
    RouterModule,
    NgbModule,
    FontAwesomeModule
  ],
  declarations: [
      ButtonsComponent,
      CodeComponent,
      ButtonsMainComponent,
      SnippetWrapperComponent,
      ButtonsSizesComponent,
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
      LoadersComponent,
      DropdownsComponent,
      CardsComponent,
      ModalsComponent,
      PaginationComponent,
      TooltipsComponent,
      AccordionComponent
  ],
  exports: [ButtonsComponent, CodeComponent]
})
export class ExampleModule { }
