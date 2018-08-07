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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ButtonsComponent, CodeComponent, ButtonsMainComponent, SnippetWrapperComponent, ButtonsSizesComponent, AlertsComponent, TabsComponent, TablesComponent, TableStandardComponent, TableStripedComponent, TableBorderedComponent, TableHoverableComponent, TableSmallComponent],
  exports: [ButtonsComponent, CodeComponent]
})
export class ExampleModule { }
