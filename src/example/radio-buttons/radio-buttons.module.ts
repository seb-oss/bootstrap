import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonsRoutingModule } from './radio-buttons-routing.module';
import { RadioButtonsComponent } from './radio-buttons.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { HorizontalComponent } from './horizontal/horizontal.component';


@NgModule({
  declarations: [RadioButtonsComponent, StandardComponent, HorizontalComponent],
  imports: [
    CommonModule,
    RadioButtonsRoutingModule,
    SharedModule,
  ]
})
export class RadioButtonsModule { }
