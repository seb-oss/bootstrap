import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonGroupRoutingModule } from './button-group-routing.module';
import { ButtonGroupComponent } from './button-group.component';
import {SharedModule} from '../../app/shared/shared.module';
import { StandardComponent } from './standard/standard.component';
import { SizesComponent } from './sizes/sizes.component';
import { FlavoursComponent } from './flavours/flavours.component';


@NgModule({
  declarations: [ButtonGroupComponent, StandardComponent, SizesComponent, FlavoursComponent],
  imports: [
    CommonModule,
    ButtonGroupRoutingModule,
    SharedModule,
  ]
})
export class ButtonGroupModule { }
