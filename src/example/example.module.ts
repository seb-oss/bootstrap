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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ButtonsComponent, CodeComponent, ButtonsMainComponent, SnippetWrapperComponent, ButtonsSizesComponent, AlertsComponent, TabsComponent],
  exports: [ButtonsComponent, CodeComponent]
})
export class ExampleModule { }
