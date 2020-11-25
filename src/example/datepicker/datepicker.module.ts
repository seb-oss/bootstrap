import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerRoutingModule } from './datepicker-routing.module';
import { DatepickerComponent } from './datepicker.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';


@NgModule({
  declarations: [DatepickerComponent, StandardComponent],
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    SharedModule,
  ]
})
export class DatepickerModule { }
