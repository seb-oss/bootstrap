import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerRoutingModule } from './spinner-routing.module';
import { SpinnerComponent } from './spinner.component';
import {SharedModule} from '../../app/shared/shared.module';
import { BackgroundComponent } from './background/background.component';
import { StandardComponent } from './standard/standard.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [SpinnerComponent, BackgroundComponent, StandardComponent, ButtonComponent],
  imports: [
    CommonModule,
    SpinnerRoutingModule,
    SharedModule,
  ]
})
export class SpinnerModule { }
