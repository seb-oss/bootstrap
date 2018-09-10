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
import { TableStandardComponent } from './components/tables/table-standard/table-standard.component';
import { TableStripedComponent } from './components/tables/table-striped/table-striped.component';
import { TableBorderedComponent } from './components/tables/table-bordered/table-bordered.component';
import { TableHoverableComponent } from './components/tables/table-hoverable/table-hoverable.component';
import { TableSmallComponent } from './components/tables/table-small/table-small.component';
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
      TableStandardComponent,
      TableStripedComponent,
      TableBorderedComponent,
      TableHoverableComponent,
      TableSmallComponent,
      BreadcrumbsComponent,
      FormsComponent,
      PersonalIdentityNumberDirective,
      ValidationMessagePipe,
      CheckboxesAndSlideTogglesComponent,
      IconsComponent,
      InputGroupComponent,
      ListGroupComponent,
      LoadersComponent,
      DropdownsComponent
  ],
  exports: [ButtonsComponent, CodeComponent]
})
export class ExampleModule { }
