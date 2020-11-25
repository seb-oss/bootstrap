import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputGroupRoutingModule } from './input-group-routing.module';
import { InputGroupComponent } from './input-group.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { StepperComponent } from './stepper/stepper.component';


@NgModule({
  declarations: [InputGroupComponent, StandardComponent, StepperComponent],
  imports: [
    CommonModule,
    InputGroupRoutingModule,
    SharedModule,
  ]
})
export class InputGroupModule { }
